import { useState, useEffect } from 'react';
import { Task, FilterType } from '../models/types';
import { loadTasks, saveTasks } from '../services/storage';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('All');
  const [loading, setLoading] = useState<boolean>(true);

  // Load initial tasks
  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  // Save tasks on change
  useEffect(() => {
    if (!loading) {
      saveTasks(tasks);
    }
  }, [tasks, loading]);

  const addTask = (title: string) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: trimmedTitle,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'Active':
        return tasks.filter((t) => !t.completed);
      case 'Completed':
        return tasks.filter((t) => t.completed);
      case 'All':
      default:
        return tasks;
    }
  };

  return {
    tasks: getFilteredTasks(),
    filter,
    setFilter,
    addTask,
    toggleTask,
    loading,
  };
};
