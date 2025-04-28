import ApiInstance from "@/helpers/api.helper";
import { API_URLS } from "./config";
import { isAxiosError } from "axios";

export const signinAPI = async (email: string, password: string) => {
  try {
    const response = await ApiInstance.post(API_URLS.signIn(), {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const message =
        error.response?.data?.message ??
        `HTTP error! status: ${error.response?.status}`;
      throw new Error(message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const signupAPI = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const response = await ApiInstance.post(API_URLS.signUp(), {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const message =
        error.response?.data?.message ??
        `HTTP error! status: ${error.response?.status}`;
      throw new Error(message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const signOutApi = async () => {
  try {
    const response = await ApiInstance.post(API_URLS.signIn());
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const message =
        error.response?.data?.message ??
        `HTTP error! status: ${error.response?.status}`;
      throw new Error(message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
