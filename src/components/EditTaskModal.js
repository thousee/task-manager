import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from '@mui/material';

function EditTaskModal({ open, task, onClose, onSave }) {
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

    useEffect(() => {
        if (task) {
            setEditedTitle(task.title);
            setEditedDescription(task.description || '');
        }
    }, [task]);

    const handleSave = () => {
        if (editedTitle.trim() && task) {
            onSave(task.id, {
                title: editedTitle.trim(),
                description: editedDescription.trim(),
            });
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    fullWidth
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    margin="dense"
                    label="Task title"
                    variant="outlined"
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    margin="dense"
                    label="Task description"
                    variant="outlined"
                    multiline
                    rows={3}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="inherit">Cancel</Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditTaskModal;