import { Task } from 'shared/api'

export const getStatusTask = (data: Task) => {
  return data.completed ? 'CLOSED' : 'OPENED'
}
