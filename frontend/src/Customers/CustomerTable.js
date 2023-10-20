import * as React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Tab } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function CustomerTable({ data }) {
    return (
        <>  
            {
                data &&
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: 30 }}></TableCell>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell style={{ width: 30 }} onClick={() => console.log(row.id)}>
                                            <OpenInNewIcon/>
                                        </TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.name}</TableCell>
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
