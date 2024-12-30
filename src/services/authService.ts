import axios, { AxiosError } from 'axios';
import store from '../store/index';
import { login, logout } from '../store/authSlice';
import { ILoginResponse, IRegisterResponse } from '@/models/auth.model';
const API_URL = process.env.API_URL;

export async function registerService(email: string, password: string) {
  try {
    const response = await axios.post<IRegisterResponse>(`${API_URL}/api/auth/register`, {
      email,
      password,
    });
    store.dispatch(login(response.data.token));
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || 'Error al registrar el usuario';
    }
  }
}

export async function loginService(email: string, password: string) {
  try {
    console.log('api', `${API_URL}/api/auth/login`, process.env.API_URL);
    const response = await axios.post<ILoginResponse>(`${API_URL}/api/auth/login`, {
      email,
      password,
    });
    const { token } = response.data;
    store.dispatch(login(token));
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || 'Error al iniciar sesión';
    }
  }
}

export async function logoutService() {
  try {
    store.dispatch(logout());
  } catch (error) {
    throw error || 'Error al cerrar sesión';
  }
}