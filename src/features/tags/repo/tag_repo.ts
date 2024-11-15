import axiosInstance from "@/api/axios_instance";
import { Tag } from "../models/tag";

interface GetTagsReturn {
  data?: Tag[];
  error?: string;
}

interface GetTagProps {
  search?: string | null;
  isPrivate?: boolean;
  userId?: string;
}

export async function getTags(params: GetTagProps): Promise<GetTagsReturn> {
  console.log(params);
  return await axiosInstance
    .get(`/v1/tags`, { params })
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
