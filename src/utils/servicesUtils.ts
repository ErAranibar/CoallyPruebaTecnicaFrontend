import { AxiosError } from 'axios';
import store from '../store/index';
import { logout } from '@/store/authSlice';
export function getAuthHeaderConfig() {
  const token = store.getState().auth.token;
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  return config;
}

export function dispatchLogout(error: AxiosError) {
  if (error.response?.status === 401 || error.response?.status === 403) {
    store.dispatch(logout());
  }
}