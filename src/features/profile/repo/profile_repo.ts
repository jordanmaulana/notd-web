import axiosInstance from "@/api/axios_instance";
import { Profile } from "../models/profile";

export async function getProfile(): Promise<Profile> {
  const { data } = await axiosInstance.get(`/v1/users/profile`);
  return data;
}
