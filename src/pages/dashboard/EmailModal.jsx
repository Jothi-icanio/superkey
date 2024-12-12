import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EmailModal = () => {
  const [open, setOpen] = useState(true);
  const [recipients, setRecipients] = useState(['richard@gmail.com', 'allwin@gmail.com', 'jasondeninsonpaul@gmail.com']);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSend = () => {
    // Add email sending logic here
    console.log('Email Sent:', { recipients, subject, message });
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Email Modal
      </Button>
      <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Send Email
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle1">To:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {recipients.map((email, index) => (
                <Chip
                  key={index}
                  label={email}
                  onDelete={() => setRecipients(recipients.filter((_, i) => i !== index))}
                  color="primary"
                />
              ))}
            </Box>
          </Box>
          <TextField
            fullWidth
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            variant="outlined"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            margin="dense"
            multiline
            rows={6}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSend} variant="contained" color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmailModal;
