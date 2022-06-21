import {
  createStore,
  combine,
  createEffect,
  createEvent,
} from 'effector/compat'
import { useStore } from 'effector-react'

import { typicodeApi } from 'shared/api'
import type { Task } from 'shared/api'

// Fetch task list
export const getTasksListFx = createEffect(
  (params?: typicodeApi.tasks.getTasksListParams) => {
    return typicodeApi.tasks.getTaskList(params)
  }
)

// Fetch task by id
export const getTaskByIdFx = createEffect(
  (params: typicodeApi.tasks.GetTaskByIdParams) => {
    return typicodeApi.tasks.getTaskById(params)
  }
)

// Store
const tasksInitialState: Record<number, Task> = {}
export const $tasks = createStore(tasksInitialState)
  .on(getTasksListFx.doneData, (_, payload) => [...payload.data])
  .on(getTaskByIdFx.doneData, (_, payload) => payload.data)

// Pending
export const $tasksListLoading = getTasksListFx.pending
export const $taskDetailsLoading = getTaskByIdFx.pending

// Hook
const useTask = (taskId: number): import('shared/api').Task | undefined => {
  return useStore($tasks)[taskId]
}

export const selectors = {
  useTask
}
export const $tasksList = combine($tasks, (tasks) => Object.values(tasks).slice(20))
