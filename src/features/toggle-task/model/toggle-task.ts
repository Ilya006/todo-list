import { createEvent } from 'effector/compat'
import produce from 'immer'

import { taskModel } from 'entites/task'

const toggleTask = createEvent<number>()

taskModel.$tasks.on(toggleTask, (state, taskId) =>
  produce(state, (draft) => {
    const task = draft[taskId]
    task.completed = !task.completed
  })
)

export const events = { toggleTask }
