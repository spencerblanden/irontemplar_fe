import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const FORM_ENDPOINT = "";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() =>{
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
    return (
        <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
        </>
    );
}


return (
    <Box
      component="form"
      
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },color: 'primary', backgroundColor: 'white',
      }}
      noValidate
      autoComplete="off"
    >
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      >
        <h3>Contact Us</h3>
       <TextField  label="Name" variant="outlined" margin='normal'/>
      <TextField id="outlined-basic" label="Email" variant="outlined" margin='normal'/>
      <TextField id="outlined-multiline-basic" label="Message" multiline rows={5} variant="outlined" margin='normal' />
      <div className="">
      <Button   variant="outlined" endIcon={<SendIcon />} >Send A Message</Button>
      </div>
    </form>
    </Box>
  );
};

export default ContactForm;