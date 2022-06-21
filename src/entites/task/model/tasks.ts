import {
  createStore,
  combine,
  createEffect,
  createEvent,
} from 'effector/compat'
import { useStore } from 'effector-react'

import { typicodeApi } from 'shared/api'
import type { Task } from 'shared/api'

export const getTasksListFx = createEffect(
  (params?: typicodeApi.tasks.getTasksListParams) => {
    return typicodeApi.tasks.getTaskList(params)
  }
)

export const $tasks = createStore<Task[]>([]).on(
  getTasksListFx.doneData,
  (_, payload) => [...payload.data]
)





export const $tasksList = combine($tasks, (tasks) => Object.values(tasks))
