import * as React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Tab } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TableToolbar from '../Components/TableToolbar';

export default function CustomerTable({ data }) {

    const handleCreation = () =>{
        console.log("New customer");
    };
    
    const handleOpen = (e) => {
        console.log(e);
    }

    return (
        <>  
            {
                data &&
                <>
                    <TableToolbar title="Customers" handleCreation={handleCreation} />
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
                                    data.map(row => (
                                        <TableRow key={row.id}>
                                            <TableCell style={{ width: 30 }} onClick={() => handleOpen(row.id)}>
                                                <OpenInNewIcon/>
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
