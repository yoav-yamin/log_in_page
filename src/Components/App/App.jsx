import { useState } from 'react'
import './App.css'
import { Button,Typography,Box,Modal,TextField,Paper } from '@mui/material'
import validator from 'validator'

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("") 
  const [open, setOpen] = useState(false);
  const[text,setText] = useState("")
  const[openforgotpassword,setOpenForgotPassword]=useState(false)
  const[textMail,setTextMail] = useState("")
  const [email,setEmail]=useState("")

  const handleClose = () => setOpen(false);

  const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
  const handleForgotPasswordClose = () => { 
    setOpenForgotPassword(false);
    setTextMail("")
  }

  function valid_login(){
    if (username=="admin" && password=="admin"){
      setOpen(true)
      setText("Login Successful")
    }
    else{
      setOpen(true)
      setText("Invalid username or password")
  }
}

  function sendemail(){
    if(validator.isEmail(email))
      setTextMail("Password reset instructions have been sent to your email if it exists.")
    else
    setTextMail("not valid email,try again")
  }
      return(
          <>
    <Paper elevation={4} sx={{ width: '500px', padding: '100px'}} >
          <div className="container">
                  <Typography variant='h3' margin={2}>
                  Log In
                  </Typography>
              <div className="inputs">
                  <div className="input">
                      <TextField type="Username" onChange={event => setUsername(event.target.value) }
                       placeholder='Username'/>
                  </div>
                  <div className="input">
                      <TextField type="Password" onChange={event => setPassword(event.target.value) } 
                      placeholder='Password'/>
                  </div>
              </div>
              <Button variant='contained' onClick={valid_login}>Log in</Button>
              <Typography mt={2}> Lost Password? <Typography sx={{cursor:"pointer"}} variant='contained' onClick={handleForgotPasswordOpen}>Click here</Typography> </Typography>
    </div>
    </Paper>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {text}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={openforgotpassword}
        onClose={handleForgotPasswordClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reset Password
          </Typography>
          <TextField sx={{margin:2}} onChange={event => setEmail(event.target.value) } placeholder='Email Address' >enter email</TextField>
          <div> 
            <Button variant='contained' onClick={sendemail}>Send</Button>
          </div>
          <Typography sx={{margin:2}}>
            {textMail}
          </Typography>
        </Box>
      </Modal>  
          </>
      )
  }

export default App
