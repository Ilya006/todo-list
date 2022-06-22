import React from 'react'
import { getStatusTask } from 'entites/task/lib'
import { taskModel } from 'entites/task'
import * as toggleTaskModel from './model'
import { Checkbox } from 'shared/ui/checkbox'

type ToggleTaskProps = {
  taskId: number
  withStatus: boolean
}

// resolve / unresolve
export const ToggleTask = ({ taskId, withStatus = true }: ToggleTaskProps) => {
  const task = taskModel.selectors.useTask(taskId)

  if (!task) {
    return null
  }

  const status = getStatusTask(task)

  return (
    <Checkbox
      taskId={taskId}
      checked={task.completed}
      onClick={toggleTaskModel.events.toggleTask}
    >
      {withStatus && status}
    </Checkbox>
  )
}
