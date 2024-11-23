/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_URL } from "@/config/api_url";
import { cookies } from "next/headers";

type WithoutBody = {
  method: "GET" | "DELETE";
  params?: Record<string, any>;
  headers?: Record<string, unknown>;
};

type WithBody = {
  method: "POST" | "PUT" | "PATCH";
  body?: Record<string, unknown>;
  params?: Record<string, any>;
  headers?: Record<string, string>;
};

type RequestOptions = WithoutBody | WithBody;

export class ApiClient {
  private sessionId: string | undefined;

  constructor(public baseUrl: string) {}

  private async checkApiToken() {
    const sessionId = (await cookies()).get("sessionId")?.value;
    this.sessionId = sessionId;
  }

  private async handleErrorResponse(response: Response) {
    if (response.status !== 403) {
      throw new Error(`HTTP error! status: ${response.status}`, {
        cause: response,
      });
    }

    const data = await response.json();
    if (data?.detail === "Invalid API Key") {
      localStorage.clear();
      window.location.reload();
    }

    throw new Error(`HTTP error! status: ${response.status}`, {
      cause: response,
    });
  }

  private buildUrl(path: string, params?: Record<string, any>): string {
    if (params) {
      params = Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== undefined),
      );
    }
    const url = new URL(this.baseUrl + path);
    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, String(value)),
      );
    }
    return url.toString();
  }

  private async request<T>(
    method: string,
    path: string,
    options: RequestOptions,
  ): Promise<T> {
    this.checkApiToken();

    const url = this.buildUrl(path, options.params);

    const requestInit: RequestInit = {
      method: method.toUpperCase(),
      headers: {
        "session-id": `${this.sessionId}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    };

    if ("body" in options) {
      requestInit.body = JSON.stringify(options.body ?? {});
    }

    const response = await fetch(url, requestInit);

    if (!response.ok) {
      await this.handleErrorResponse(response);
    }

    try {
      return response.status !== 204
        ? await response.json()
        : (null as unknown as T);
    } catch (error) {
      throw new Error("Could not parse JSON response");
    }
  }

  public get<T>(
    path: string,
    options?: Omit<RequestOptions, "body" | "method">,
  ): Promise<T> {
    return this.request<T>("GET", path, { method: "GET", ...options });
  }

  public post<T>(path: string, options: Omit<WithBody, "method">): Promise<T> {
    return this.request<T>("POST", path, { method: "POST", ...options });
  }

  public patch<T>(path: string, options: Omit<WithBody, "method">): Promise<T> {
    return this.request<T>("PATCH", path, { method: "PATCH", ...options });
  }

  public put<T>(path: string, options: Omit<WithBody, "method">): Promise<T> {
    return this.request<T>("PUT", path, { method: "PUT", ...options });
  }

  public delete<T>(
    path: string,
    options?: Omit<RequestOptions, "body" | "method">,
  ): Promise<T> {
    return this.request<T>("DELETE", path, { method: "DELETE", ...options });
  }
}

export const apiClient = new ApiClient(API_URL!);
