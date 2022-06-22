import React from 'react'

import styles from './checkbox.module.scss'

type PropsType = {
  checked: boolean
  children: React.ReactNode
  onClick: any
  taskId: number
}

export const Checkbox = ({ checked, onClick, children, taskId }: PropsType) => {
  return (
    <div>
      <input
        onChange={() => onClick(taskId)}
        type="checkbox"
        checked={checked}
        className={styles.checkbox}
      />
      {children}
    </div>
  )
}
