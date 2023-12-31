import * as React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Tab } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import styles from '../styles.css';

export default function OrderTable({ data }) {
    return (
        <>  
            {
                data &&
                <>
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
                                    data.map(row => (
                                        <TableRow key={row.id}>
                                            <TableCell style={{ width: 30 }}>
                                                <Link to={`/Orders/${row.id}`} className='icon-link'>
                                                    <OpenInNewIcon/>
                                                </Link>
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
