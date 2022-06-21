import React from 'react'
import { useStore } from 'effector-react'

import { TaskRow, taskModel } from 'entites/task'

const TasksListPage = () => {
  const tasks = useStore(taskModel.$tasksList)

  React.useEffect(() => {taskModel.getTasksListFx()}, [])

  React.useEffect(() => console.log(tasks), [tasks])

  return <div>hello</div>
}

export default TasksListPage
