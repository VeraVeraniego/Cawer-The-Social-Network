import axios from "axios";
import { JSONPLACEHOLDERS_API } from "./constants";
interface IApiResponse {
  data?: Array<any>;
  error?: unknown;
}

export const getUserPosts = async (id: number) => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(
      `${JSONPLACEHOLDERS_API.USER_POSTS_ID}${id}`
    );
    apiResponse.data = response.data;
  } catch (error) {
    apiResponse.error = (error as Error).message;
  }
  return apiResponse;
};

export const getUsers = async () => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(`${JSONPLACEHOLDERS_API.USERS}`);
    apiResponse.data = response.data;
  } catch (error) {
    apiResponse.error = (error as Error).message;
  }
  return apiResponse;
};

export const getAllPosts = async () => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(`${JSONPLACEHOLDERS_API.ALL_POSTS}`);
    apiResponse.data = response.data;
  } catch (error) {
    apiResponse.error = (error as Error).message;
  }
  return apiResponse;
};

export const getPostComments = async (postId: number) => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(
      `${JSONPLACEHOLDERS_API.COMMENTS}${postId}`
    );
    apiResponse.data = response.data;
  } catch (error) {
    apiResponse.error = (error as Error).message;
  }
  return apiResponse;
};
