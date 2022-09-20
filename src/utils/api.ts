import axios from "axios";
import { JSONPLACEHOLDERS_API } from "./constants";
export interface IApiResponse {
  data?: Array<any> | any;
  error?: unknown;
}

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

export const getUserPosts = async (id: number) => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(
      `${JSONPLACEHOLDERS_API.USER_POSTS_BY_ID(id)}`
    );
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

export const getPostCommentsByPostId = async (postId: string | undefined) => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(
      `${JSONPLACEHOLDERS_API.COMMENTS(postId)}`
    );
    apiResponse.data = response.data;
  } catch (error) {
    apiResponse.error = (error as Error).message;
  }
  return apiResponse;
};

export const getPostById = async (id: number) => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(`${JSONPLACEHOLDERS_API.POST_BY_ID(id)}`);
    apiResponse.data = response.data;
  } catch (error) {
    apiResponse.error = (error as Error).message;
  }
  return apiResponse;
};

export const getUserById = async (id: number) => {
  const apiResponse: IApiResponse = {};
  try {
    const response = await axios.get(`${JSONPLACEHOLDERS_API.USER_BY_ID(id)}`);
    apiResponse.data = response.data;
  } catch (error) {
    apiResponse.error = (error as Error).message;
  }
  return apiResponse;
};
