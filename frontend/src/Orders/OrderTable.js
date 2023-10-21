import * as React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Tab } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TableToolbar from '../Components/TableToolbar';

export default function OrderTable({ orders }) {

    const handleCreation = () =>{
        console.log("New order");
    };
    
    const handleOpen = (e) => {
        console.log(e);
    }

    return (
        <>  
            {
                orders &&
                <>
                    <TableToolbar title="Orders" handleCreation={handleCreation} />
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: 30 }}></TableCell>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Title</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    orders.map(row => (
                                        <TableRow key={row.id}>
                                            <TableCell style={{ width: 30 }} onClick={() => handleOpen(row.id)}>
                                                <OpenInNewIcon/>
                                            </TableCell>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.title}</TableCell>
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
