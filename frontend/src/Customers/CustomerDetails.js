import { useParams } from "react-router-dom"
import {Box, Button, Paper, Typography, CircularProgress} from '@mui/material';
import useFetch from "../Hooks/useFetch";
import useFetchPage from "../Hooks/useFetchPage";
import OrderTable from "../Orders/OrderTable";
import { useEffect, useState } from "react";
import CustomerFormContent from "./CustomerFormContent";
import DetailToolbar from "../Components/DetailToolbar";


export default function CustomerDetails() {
    const {idParam} = useParams()
    const {data, isLoading, error, refreshData} = useFetch(`http://localhost:8080/api/v1/customer/${idParam}`);
    const {data : pageData, isLoading : pageIsLoading, error : pageError, refreshData : pageRefreshData, setPage, setPageSize}  = useFetchPage(`http://localhost:8080/api/v1/salesorder/bycustomer?customerId=${idParam}`);
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [readMode, setReadMode] = useState(true);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if(data){
            setId(data.id);
            setName(data.name);
            setEmail(data.email);
        }
    },[data])

    const handleEdit = () => {
        setReadMode(false);
        setEditMode(true);
    }

    const handleSave = async (e) => {
        console.log("Save event")
        e.preventDefault();
        try {
            if(true){
                throw Error('error');
            }

            const res = await fetch('http://localhost:8080/api/v1/customer', {
                method: 'PATCH',
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
            setReadMode(true);
            setEditMode(false);

        } catch (e) {
            console.log(e);
        }
    }

    const handleCancel = () => {
        refreshData();
        setEditMode(false);
        setReadMode(true);
    }

    return (
        <>
            {(isLoading || pageIsLoading) && <CircularProgress />}
            {(error || pageError) &&  <Typography>Error while loading data</Typography>}
            <form onSubmit={(e) => handleSave(e)}>
                {data &&
                    <>
                            <DetailToolbar title={"Customer"} handleEdit={handleEdit} />
                            <Paper style={{ padding: '20px' }}>
                                <CustomerFormContent id={id} name={name} setName={setName} email={email} setEmail={setEmail} readMode={readMode} editMode={editMode}/>
                            </Paper>
                    </>
                }
                {pageData && 
                <>
                    <Typography sx={{mt: 5}} variant="h6">Customer Orders</Typography>
                    <OrderTable data={pageData.content}/>
                </>
                }
                {editMode &&
                    <Box sx={{mt:2}}>
                        <Button variant="contained" type="submit">Save</Button>
                        <Button variant="contained" onClick={() => handleCancel()}>Cancel</Button>
                    </Box>
                }
            </form>
        </>
    )
}