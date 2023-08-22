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
    const navigate = useNavigate();

    const handleSubmit = () => {
        
        if (name && email && number) {
            const user = { name: name, email: email, number: number }

            localStorage.setItem('user', JSON.stringify(user))
            navigate('/second-page', { replace: true })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must enter your details before proceed to the Next page!',
            })
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
                        <TextField value={name} onChange={(newValue) => setName(newValue.target.value)} id="outlined-basic" fullWidth label="Name" variant="outlined" />
                    </div>
                    <div>
                        <TextField value={email} onChange={(newValue) => setEmail(newValue.target.value)} id="outlined-basic" fullWidth label="Email" variant="outlined" />
                    </div>
                    <div>
                        <TextField value={number} onChange={(newValue) => setNumber(newValue.target.value)} id="outlined-basic" fullWidth label="Phone" variant="outlined" />
                    </div>
                    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default FirstPage;