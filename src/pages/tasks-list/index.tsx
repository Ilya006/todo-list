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
    taskModel.getTasksListFx()
  }, [])

  return (
    <div className={styles.page}>
      <h2>hello mazafaka</h2>
      <div className={styles.list}>
        {isLoading && <h3> Loading list</h3>}
        {!isLoading && tasks.map((task) => (
          <ListItemView data={task} />
        ))}
      </div>
    </div>
  )
}

const ListItemView = (data: import('shared/api').Task) => {
  return (
    <TaskRow data={data} titleHref={`/${data.id}`} before={<ToggleTask taskId={data.id} withStatus={false} />} />
  )
}

export default TasksListPage
