import * as React from 'react';
import useFetchPage from "../Hooks/useFetchPage";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Tab, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.css';
import CircularProgress from '@mui/material/CircularProgress';
import TableToolbar from '../Components/TableToolbar';

export default function CustomerTable({hideToolbar}) {

    const navigate = useNavigate();

    const { data, isLoading, error, refreshData, setPage, setPageSize} = useFetchPage('http://localhost:8080/api/v1/customer', 0, 10);

    const handleCreation = () =>{
        navigate('/CustomerCreation');
    };

    const handleSearch = (text) => {
        console.log(text);
    }

    return (
        <>  
            {isLoading && <CircularProgress />}
            {error &&  <Typography>Error while loading data</Typography>}
            {!hideToolbar && <TableToolbar title="Customers" handleCreation={handleCreation} handleSearch={handleSearch} />}
            {
                data && data.content &&
                <>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: 30 }}></TableCell>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.content.map(row => (
                                        <TableRow key={row.id}>
                                            <TableCell style={{ width: 30 }}>
                                                <Link to={`/Customers/${row.id}`} className='icon-link'>
                                                    <OpenInNewIcon/>
                                                </Link>
                                            </TableCell>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            }
        </>
    )
}
