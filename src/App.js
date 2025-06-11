import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  ThemeProvider,
  CssBaseline,
  ButtonGroup,
  Button,
} from '@mui/material';
import TaskHeader from './components/TaskHeader';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EditTaskModal from './components/EditTaskModal';
import { lightTheme, darkTheme } from './theme/theme';
import TaskDB from './utils/TaskDB';

const db = new TaskDB('taskManager');

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const taskCounts = {
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length,
  };

  useEffect(() => {
    const initDB = async () => {
      try {
        await db.init();
        const storedTasks = await db.get('tasks') || [];
        setTasks(storedTasks);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };
    initDB();
  }, []);

  const saveTasks = async (newTasks) => {
    try {
      await db.put('tasks', newTasks);
      setTasks(newTasks);
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = async (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    await saveTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await saveTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = async (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    await saveTasks(updatedTasks);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const handleSaveEdit = async (taskId, taskData) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, title: taskData.title, description: taskData.description }
        : task
    );
    await db.put('taskList', updatedTasks);
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = searchQuery
      ? task.text.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesFilter = filter === 'all' ||
      (filter === 'active' && !task.completed) ||
      (filter === 'completed' && task.completed);
    return matchesSearch && matchesFilter;
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <TaskHeader
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          taskCounts={taskCounts}
        />
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          onAddTask={addTask}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Box sx={{ mb: 3 }}>
          <ButtonGroup variant="contained" sx={{ backgroundColor: 'background.paper' }}>
            {['all', 'active', 'completed'].map((f) => (
              <Button
                key={f}
                onClick={() => setFilter(f)}
                variant={filter === f ? 'contained' : 'outlined'}
                sx={{ textTransform: 'capitalize' }}
              >
                {f}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={handleEditTask}
        />
        <EditTaskModal
          open={Boolean(editingTask)}
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleSaveEdit}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;