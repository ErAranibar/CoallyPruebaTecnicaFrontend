import axios, { AxiosError } from 'axios';
import { ITask } from '@/models/task.model';
import { dispatchLogout, getAuthHeaderConfig } from '@/utils/servicesUtils';
import store from '@/store/index';
import { setTasks } from '@/store/taskSlice';
const API_URL = process.env.API_URL;

export async function getAndDispatchTasksService() {
  try {
    const response = await axios.get<ITask[]>(`${API_URL}/api/tasks/all`, getAuthHeaderConfig());
    store.dispatch(setTasks(response.data));
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatchLogout(error);
      throw error.response?.data?.message || 'Error al registrar el usuario';
    }
  }
}

export async function updateTaskService(id: string, task: Partial<ITask>) {
  try {
    const response = await axios.put<ITask>(`${API_URL}/api/tasks/update/${id}`, task, getAuthHeaderConfig());
    await getAndDispatchTasksService();
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatchLogout(error);
      throw error.response?.data?.message || 'Error al registrar el usuario';
    }
  }
}

export async function addTaskService(task: Partial<ITask>) {
  try {
    const response = await axios.post<ITask>(`${API_URL}/api/tasks/add`, task, getAuthHeaderConfig());
    await getAndDispatchTasksService();
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatchLogout(error);
      throw error.response?.data?.message || 'Error al registrar el usuario';
    }
  }
}

export async function deleteTaskService(id: string) {
  try {
    const response = await axios.delete<ITask>(`${API_URL}/api/tasks/delete/${id}`, getAuthHeaderConfig());
    await getAndDispatchTasksService();
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatchLogout(error);
      throw error.response?.data?.message || 'Error al registrar el usuario';
    }
  }
}