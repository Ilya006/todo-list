import { createEvent } from 'effector/compat'
import produce from 'immer'

import { taskModel } from 'entites/task'

const toggleTask = createEvent<number>()

taskModel.$tasks.on(toggleTask, (store, taskId) => {
  produce(store, (draft) => {
    const task = draft[taskId]
    task.completed = !task.completed
  })
})

export const events = { toggleTask }
