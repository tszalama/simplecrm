import * as React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Tab } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function OrderTable({ orders }) {
    return (
        <>  
            {
                orders &&
                <TableContainer component={Paper}>
                    <Table aria-label='orders table'>
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
                                        <TableCell style={{ width: 30 }} onClick={() => console.log(row.id)}>
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
            }
        </>
    )
}
