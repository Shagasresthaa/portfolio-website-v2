import axios, { AxiosError, AxiosResponse } from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000';

interface User {
  username: string;
  password: string;
}

interface RegUser {
  username: string;
  password: string;
  email: string;
}

interface LoginResponse {
  data: {
    message: string;
  };
  status: number;
}

interface RegisterResponse {
  data: {
    message: string;
    userId: number;
  };
  status: number;
}

export async function login(user: User): Promise<LoginResponse> {
  try {
    const response: AxiosResponse = await axios.post(`${API_URL}/api/login`, {
      username: user.username,
      password: user.password,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.status === 401) {
      return {
        data: { message: "Auth Error"},
        status: 401,
      };
    }

    throw error;
  }
}

export async function register(user: RegUser): Promise<RegisterResponse> {
  try {
    const response: AxiosResponse = await axios.post(`${API_URL}/api/register`, {
      username: user.username,
      password: user.password,
      email : user.email
    });

    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 500) {
      return {
        data: {message: "Registration Failed", userId: 0},
        status: 500
      };
    }   

    throw error;
  }
}