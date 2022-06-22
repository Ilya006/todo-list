import React from 'react'
import { useStore } from 'effector-react'

import { TaskRow, taskModel } from 'entites/task'

import styles from './styles.module.scss'
import { ToggleTask } from 'features/toggle-task'

const TasksListPage = () => {
  const tasks = useStore(taskModel.$tasksList)
  const isLoading = useStore(taskModel.$tasksListLoading)
  const isEmpty = useStore(taskModel.$taskDetailsLoading)

  React.useEffect(() => {
    taskModel.getTasksListFx({ userId: 1 })
  }, [])

  return (
    <div className={styles.page}>
      <h2>hello mazafaka</h2>
      <div className={styles.list}>
        {isLoading && <h3> Loading list</h3>}
        {!isLoading &&
          tasks.map((task, index) => <ListItemView key={index} task={task} />)}
      </div>
    </div>
  )
}

const ListItemView = ({ task }: any) => {
  return (
    <TaskRow
      data={task}
      titleHref={`/${task.id}`}
      before={<ToggleTask taskId={task.id} withStatus={false} />}
    />
  )
}

export default TasksListPage
