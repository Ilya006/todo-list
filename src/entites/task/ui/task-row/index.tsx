import React from 'react'
import { Row } from 'shared/ui/row'

type PropsType = {
  data: any
  before: React.ReactNode
  titleHref: string
}

export const TaskRow = ({data, before, titleHref}: PropsType) => {
  return (
    <Row completed={data.completed} >
      {before}
      {titleHref}
    </Row>
  )
}
