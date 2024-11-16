/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_URL } from "@/config/api_url";
import { cookies } from "next/headers";

class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request(
    method: string,
    url: string,
    data?: Record<string, any>,
  ): Promise<any> {
    const sessionId = (await cookies()).get("sessionId")?.value;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (sessionId) {
      headers["session-id"] = sessionId;
    }

    const response = await fetch(this.baseUrl + url, {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  }

  public async get(url: string, params?: Record<string, any>) {
    if (params) {
      const query = queryParam(params);
      url = `${url}?${query.toString()}`;
    }
    return this.request("GET", url);
  }

  public async post(url: string, data: Record<string, any>) {
    return this.request("POST", url, data);
  }

  public async put(url: string, data: Record<string, any>) {
    return this.request("PUT", url, data);
  }

  public async delete(url: string) {
    return this.request("DELETE", url);
  }
}

export const api = new HttpClient(API_URL!);

export const queryParam = (params: Record<string, any>): URLSearchParams => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });
  return query;
};
