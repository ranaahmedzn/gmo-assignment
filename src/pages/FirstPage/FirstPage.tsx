import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './FirstPage.css'
import { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FirstPage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [numberError, setNumberError] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleSubmit = () => {
        setNameError(false)
        setEmailError(false)
        setNumberError(false)

        if (!name && !email && !number) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must enter your details before proceed to the Next page!',
            })
        }
        if (!name) {
            return setNameError(true)
        }
        else if (!email) {
            return setEmailError(true)
        }
        else if (!number) {
            return setNumberError(true)
        }
        else {
            const user = { name: name, email: email, number: number }

            localStorage.setItem('user', JSON.stringify(user))
            navigate('/second-page', { replace: true })
        }
    }

    return (
        <div className='main-div'>
            <div className='middle-div'>
                <h3 className='title'>Please Provide your Information</h3>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { width: 'full', mb: '20px' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField error={nameError} value={name} onChange={(newValue) => setName(newValue.target.value)} id="outlined-basic" fullWidth label="Name" variant="outlined" helperText={`${nameError ? 'Please enter your name!' : ''}`} />
                    </div>
                    <div>
                        <TextField error={emailError} value={email} onChange={(newValue) => setEmail(newValue.target.value)} id="outlined-basic" fullWidth label="Email" variant="outlined" helperText={`${emailError ? 'Please enter your email!' : ''}`} />
                    </div>
                    <div>
                        <TextField error={numberError} value={number} onChange={(newValue) => setNumber(newValue.target.value)} id="outlined-basic" fullWidth label="Phone" variant="outlined" helperText={`${numberError ? 'Please enter your number!' : ''}`} />
                    </div>
                    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                        Submit
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default FirstPage;