import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { DarkMode } from '@mui/icons-material';

function TaskHeader({ darkMode, toggleDarkMode, taskCounts }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h4" fontWeight="500">
                    Tasks
                </Typography>
                <IconButton onClick={toggleDarkMode} sx={{ color: 'text.primary' }}>
                    <DarkMode />
                </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary">
                {taskCounts.active} active, {taskCounts.completed} completed
            </Typography>
        </Box>
    );
}

export default TaskHeader;