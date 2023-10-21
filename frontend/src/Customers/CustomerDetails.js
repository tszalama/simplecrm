import { useParams } from "react-router-dom"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useFetch from "../Hooks/useFetch";
import CircularProgress from '@mui/material/CircularProgress';
import useFetchPage from "../Hooks/useFetchPage";
import OrderTable from "../Orders/OrderTable";


export default function CustomerDetails() {
    const {id} = useParams()
    const {data, isLoading, error, refreshData} = useFetch(`http://localhost:8080/api/v1/customer/${id}`);
    const {data : pageData, isLoading : pageIsLoading, error : pageError, refreshData : pageRefreshData, setPage, setPageSize}  = useFetchPage(`http://localhost:8080/api/v1/salesorder/bycustomer?customerId=${id}`);
    console.log(pageData);
    return (
        <>
            {(isLoading || pageIsLoading) && <CircularProgress />}
            {(error || pageError) &&  <Typography>Error while loading data</Typography>}
            {data &&
                <>
                    <Typography variant="h6">Customer</Typography>
                    <Paper style={{ padding: '20px' }}>
                    <Grid container alignItems="center">
                        <Grid item xs={6} md={3} >
                            <TextField
                                label="Id"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={data.id}
                            />
                        </Grid>
                        <Grid item xs={6} md={3} >
                            <TextField
                                label="Name"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={data.name}
                            />
                        </Grid> 
                        <Grid item xs={6} md={3} >
                        <TextField
                                label="Email"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={data.email}
                            />
                        </Grid>
                    </Grid>
                    </Paper>
                </>
            }
            {pageData && 
            <>
                <Typography sx={{mt: 5}} variant="h6">Customer Orders</Typography>
                <OrderTable data={pageData.content}/>
            </>}
        </>
    )
}