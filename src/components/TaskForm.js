import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTask = {
            title: title.trim(),
            description: description.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };

        onAddTask(newTask);
        setTitle('');
        setDescription('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
            <TextField
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                sx={{ mb: 2 }}
                required
            />
            <TextField
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description (optional)"
                multiline
                rows={2}
                sx={{ mb: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ height: 48 }}
            >
                + Add Task
            </Button>
        </Box>
    );
}

export default TaskForm;