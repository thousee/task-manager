import React from 'react';
import { Box, TextField, Button, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

function TaskInput({ newTask, setNewTask, onAddTask, searchQuery, setSearchQuery }) {
    return (
        <Box sx={{ mb: 3 }}>
            <form onSubmit={onAddTask}>
                <TextField
                    fullWidth
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'background.paper',
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ minWidth: '100px' }}
                            >
                                + Add
                            </Button>
                        ),
                    }}
                />
            </form>
            <TextField
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks..."
                sx={{
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search color="action" />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export default TaskInput;