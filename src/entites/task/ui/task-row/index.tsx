import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'shared/ui/row'

type PropsType = {
  data: any
  before: React.ReactNode
  titleHref: string
}

export const TaskRow = ({ data, before, titleHref }: PropsType) => {
  const title = titleHref ? (
    <Link to={titleHref}>{data.title}</Link>
  ) : (
    data.title
  )

  return (
    <Row completed={data.completed}>
      {before}
      {title}
    </Row>
  )
}
