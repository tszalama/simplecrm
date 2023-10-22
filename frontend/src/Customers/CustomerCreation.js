import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import CustomerFormContent from './CustomerFormContent';

export default function CustomerCreation() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/api/v1/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name : name,
                    email: email
                })
            });
            if(!res.ok) {
                throw Error('could not post data');
            }
            navigateToCustomers();

        } catch (e) {
            console.log(e);
        }
    }

    const navigateToCustomers = () =>{
        navigate('/Customers');
    };

    return (
        <>
            <form onSubmit={(e) => handleSave(e)}>
                <Typography variant="h6">New Customer</Typography>
                <Paper style={{ padding: '20px' }}>
                    <CustomerFormContent name={name} setName={setName} email={email} setEmail={setEmail} creationMode={true}/>
                </Paper>
                <Box sx={{mt:2}}>
                    <Button variant="contained" type="submit">Save</Button>
                </Box>
            </form>
        </>
    );
}