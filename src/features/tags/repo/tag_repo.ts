import axiosInstance from "@/api/axios_instance";
import { Tag } from "../models/tag";

interface GetTagsReturn {
  data?: Tag[];
  error?: string;
}

export async function getTags(): Promise<GetTagsReturn> {
  return await axiosInstance
    .get(`/v1/tags`)
    .then(function (response) {
      return { data: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response.data };
      }
      return { error: "Something went wrong" };
    });
}
