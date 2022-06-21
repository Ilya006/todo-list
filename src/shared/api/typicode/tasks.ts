import { AxiosPromise } from 'axios'
import { apiInstance } from './base'
import { Task } from './models'

const base_URL = './todos'

// Type
export type getTasksListParams = {
  userId?: number
  completed?: boolean
}

// Получить задачи
export const getTaskList = (
  params?: getTasksListParams
): AxiosPromise<Task[]> => {
  return apiInstance.get(base_URL, { params })
}

// Type
export type GetTaskByIdParams = {
  taskId: number
}

export const getTaskById = ({
  taskId,
  ...params
}: GetTaskByIdParams): AxiosPromise<Task[]> => {
  return apiInstance.get(`${base_URL}/${taskId}`, { params })
}
