import React from 'react'
import cn from 'classnames'

import styles from './row.module.scss'

type PropsType = {
  children: React.ReactNode
  completed?: boolean
}

export const Row = ({ children, completed }: PropsType) => {
  return (
    <div className={cn(styles.row, { [styles.completed]: completed })}>
      {children}
    </div>
  )
}
