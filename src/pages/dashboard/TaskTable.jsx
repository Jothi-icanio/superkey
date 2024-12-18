import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Autocomplete,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RichTextEditor from 'react-rte';
import RichTextEditorM from '../../components/AppComponents/AppRichTextEditor';

const EmailModal = () => {
  const [open, setOpen] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState(RichTextEditor.createEmptyValue());
  const [inputEmail, setInputEmail] = useState('');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Predefined email options
  const emailOptions = [
    'richard@gmail.com',
    'allwin@gmail.com',
    'jasondeninsonpaul@gmail.com',
    'example1@gmail.com',
    'example2@gmail.com',
  ];

  // Open/Close Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRecipients([]);
    setSubject('');
    setBody(RichTextEditor.createEmptyValue());
    setInputEmail('');
  };

  // Add a manually entered email
  const handleAddEmail = (event) => {
    if (event.key === 'Enter' && inputEmail.trim()) {
      event.preventDefault();
      if (emailRegex.test(inputEmail)) {
        setRecipients([...recipients, inputEmail]);
        setInputEmail('');
      } else {
        alert('Invalid email address');
      }
    }
  };

  // Send Email
  const handleSend = () => {
    const htmlBody = body.toString('html');
    console.log('Email Sent:', { recipients, subject, htmlBody });
    handleClose();
  };

  return (
    <div>
      {/* Button to Open Modal */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Email Modal
      </Button>

      {/* Email Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Send Email
          </Typography>
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
          {/* "To" Field with Autocomplete */}
          <Box sx={{ marginBottom: "2rem",     borderRadius: '0.8rem',
        background: '#F8F8F8',
        padding: '0.3rem',
        display: 'flex',
        alignItems: 'center', }}>
            <Typography       sx={{
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '28px',
        color: '#323C4D',
      }} >
              To:
            </Typography>
            <Autocomplete
  multiple
  freeSolo
  limitTags={3}
  options={emailOptions}
  value={recipients}
  onChange={(event, newValue) => setRecipients(newValue)}
  sx={{
    width: '100%',
    marginLeft: '1rem',
    
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="standard"
      placeholder="Add more Recipient"
      onKeyDown={handleAddEmail}
      value={inputEmail}
      onChange={(e) => setInputEmail(e.target.value)}
      sx={{
        '& .MuiInput-root::before': {
          border: 'none',
        },
        '& .MuiInput-root::after': {
          border: 'none',
        },
        '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
          border: 'none',
        },
      }}
    />
  )}
/>

          </Box>
<Box>
<Typography         sx={{
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19.36px',
        letterSpacing: '5%',
        color: '#5B738B',
      }}>
              Subject
            </Typography>
          {/* Subject Field */}
          <TextField
            fullWidth
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            variant="standard"
            margin="dense"
            sx={{
              marginBottom:"2rem",
              background:"#F8F8F8",
              padding: '0.3rem',
        '& .MuiInput-root::before': {
          border: 'none',
        },
        '& .MuiInput-root::after': {
          border: 'none',
        },
        '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
          border: 'none',
        },
      }}
          />
          </Box>
          <RichTextEditorM/>
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
