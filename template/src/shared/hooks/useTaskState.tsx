import React, { useState, createContext, useContext } from 'react'

interface Message {
  variant: 'agent' | 'customer'
  message: string
  date: string
  author: string
}

interface Task {
  id: string
  status: 'pending' | 'accepted' | 'rejected'
  messages: Message[]
}

interface TaskState {
  tasks: Task[]
  acceptTask: (id: string) => void
  rejectTask: (id: string) => void
}

const TaskContext = createContext<TaskState>({
  tasks: [],
  acceptTask: (id) => {},
  rejectTask: (id) => {},
})

interface TaskContextProviderProps {
  children: React.ReactNode
}

export const TaskContextProvider = (props: TaskContextProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([{ id: 'foo', status: 'pending', messages: [] }])

  function acceptTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: 'accepted',
          }
        }
        return task
      })
    )
  }

  function rejectTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        acceptTask,
        rejectTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export function useTaskState() {
  return useContext(TaskContext)
}
