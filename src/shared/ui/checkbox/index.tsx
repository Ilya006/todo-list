import React from 'react'

import styles from 'checkbox.module.scss'

type PropsType = {
  checked: boolean
  children: React.ReactNode
  onClick: any
}

export const Checkbox = ({ checked, onClick, children }: PropsType) => {
  const onClickInput = () => {
    onClick()
  }
  
  return (
    <div>
      <input checked={checked} onClick={onClickInput} className={styles.checkbox} />
      {children}
    </div>
  )
}
