'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  dueDate?: string
  priority: 'low' | 'medium' | 'high'
  createdAt: string
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Elective 2 - Activity 3',
      description: 'Create a Next js project containing at least three pages. (Optional: Make it dynamic)',
      completed: false,
      dueDate: '2025-10-19',
      priority: 'high',
      createdAt: '2025-10-15'
    },
    {
      id: '2',
      title: 'IPT Connecting files',
      description: 'Connect frontend and backend of our IPT project',
      completed: true,
      dueDate: '2025-10-15',
      priority: 'medium',
      createdAt: '2025-10-12'
    },
    {
      id: '3',
      title: 'Research Methods Chapter 2',
      description: 'Finish the draft for Chapter 2 of our research',
      completed: false,
      dueDate: '2025-10-19',
      priority: 'high',
      createdAt: '2025-10-15'
    }
  ])

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  })

  const addTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title,
        description: newTask.description,
        completed: false,
        dueDate: newTask.dueDate || undefined,
        priority: newTask.priority,
        createdAt: new Date().toISOString().split('T')[0]
      }
      setTasks([...tasks, task])
      setNewTask({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium'
      })
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴'
      case 'medium': return '🟡'
      case 'low': return '🟢'
      default: return '⚪'
    }
  }

  const pendingTasks = tasks.filter(task => !task.completed)
  const completedTasks = tasks.filter(task => task.completed)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Tasks</h1>
          <p className="text-gray-600">Manage your tasks and stay organized</p>
        </div>

        {/* Add Task Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Task title *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              />
            </div>
            <div>
              <textarea
                placeholder="Description (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={2}
                value={newTask.description}
                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value as 'low' | 'medium' | 'high'})}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <button
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-6">
          {/* Pending Tasks */}
          {pendingTasks.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Pending Tasks ({pendingTasks.length})
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {pendingTasks.map(task => (
                  <TaskCard 
                    key={task.id} 
                    task={task} 
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                    getPriorityColor={getPriorityColor}
                    getPriorityIcon={getPriorityIcon}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed Tasks */}
          {completedTasks.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Completed Tasks ({completedTasks.length})
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {completedTasks.map(task => (
                  <TaskCard 
                    key={task.id} 
                    task={task} 
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                    getPriorityColor={getPriorityColor}
                    getPriorityIcon={getPriorityIcon}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {tasks.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No tasks yet</h3>
              <p className="text-gray-600">Get started by adding your first task above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Task Card Component
interface TaskCardProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  getPriorityColor: (priority: string) => string
  getPriorityIcon: (priority: string) => string
}

function TaskCard({ task, onToggle, onDelete, getPriorityColor, getPriorityIcon }: TaskCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${
      task.completed ? 'border-green-500 opacity-75' : 'border-blue-500'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mt-1"
          />
          <div className="flex-1 min-w-0">
            <Link 
              href={`/tasks/${task.id}`}
              className="block hover:text-blue-600 transition-colors"
            >
              <h3 className={`font-semibold text-gray-800 truncate ${
                task.completed ? 'line-through' : ''
              }`}>
                {task.title}
              </h3>
            </Link>
            <p className={`text-gray-600 text-sm mt-1 line-clamp-2 ${
              task.completed ? 'line-through' : ''
            }`}>
              {task.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
            {getPriorityIcon(task.priority)} {task.priority}
          </span>
          {task.dueDate && (
            <span className="text-gray-500 text-xs">
              📅 {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Link
            href={`/tasks/${task.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View
          </Link>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}