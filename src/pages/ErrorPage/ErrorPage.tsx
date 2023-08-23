import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.png'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

const ErrorPage = () => {
    return (
        <div style={{width: '100%', height: '100vh' ,display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(to right, #2A5470, #4C4177)', color: 'white'}}>
            <div style={{textAlign: 'center'}}>
                <img width={280} src={errorImg} alt="" />
                <h2 style={{fontSize: '40px', fontWeight: 'bold', margin: '40px 0'}}>Page not found | 404</h2>
                <Link to="/">
                    <Button variant="contained" startIcon={<HomeIcon />}>
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;