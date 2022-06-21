import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const TasksListPage = lazy(() => import("./tasks-list"));

export const Routing = () => (
  <Routes>
    <Route path="/" element={<TasksListPage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)