import React from 'react';
import {
    Box,
    Paper,
    Typography,
    IconButton,
    alpha,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
    return (
        <AnimatePresence>
            {tasks.map((task, index) => (
                <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            mb: 2,
                            p: 2,
                            display: 'flex',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: 'divider',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            },
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        <Box
                            component="input"
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleTask(task.id)}
                            className="custom-checkbox"
                            sx={{ mr: 2, mt: 1 }}
                        />
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    textDecoration: task.completed ? 'line-through' : 'none',
                                    color: task.completed ? 'text.secondary' : 'text.primary',
                                    fontWeight: 500,
                                    mb: 0.5,
                                }}
                            >
                                {task.title}
                            </Typography>
                            {task.description && (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        textDecoration: task.completed ? 'line-through' : 'none',
                                        mb: 1,
                                    }}
                                >
                                    {task.description}
                                </Typography>
                            )}
                            <Typography variant="caption" color="text.secondary">
                                {new Date(task.createdAt).toLocaleDateString()}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                            <IconButton
                                size="small"
                                onClick={() => onEditTask(task.id)}
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    },
                                }}
                            >
                                <Edit fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={() => onDeleteTask(task.id)}
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'error.main',
                                        backgroundColor: (theme) => alpha(theme.palette.error.main, 0.1),
                                    },
                                }}
                            >
                                <Delete fontSize="small" />
                            </IconButton>
                        </Box>
                    </Paper>
                </motion.div>
            ))}
        </AnimatePresence>
    );
}

export default TaskList;