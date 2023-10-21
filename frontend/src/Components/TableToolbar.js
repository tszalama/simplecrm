import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function TableToolbar ( {title, handleCreation, handleSearch} ) {

    const [searchText, setSearchText] = useState(null);
    const handleSearchViaEnterKey = (e) => {
        if(e.key == "Enter") {
            handleSearch(searchText);
        }
    }

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        console.log(searchText);
    }

    return (
        <Toolbar>
            <Grid container alignItems="center">
                <Grid item xs={12} md={2} >
                    <Typography variant="h6">{title}</Typography>
                </Grid>
                <Grid item xs={12} md={10} container justifyContent="flex-end" alignItems="center">
                    <Grid item xs={11} container alignItems="center" justifyContent="left">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <TextField 
                                id="input-with-sx" 
                                label="Search" 
                                variant="outlined" 
                                size='small'
                                onChange={(e) => handleSearchTextChange(e)} 
                                onKeyDown={(e) => handleSearchViaEnterKey(e)}
                            />
                            <SearchIcon onClick={ () => handleSearch(searchText)}/>
                        </Box>
                    </Grid>
                    <Grid item xs={1} container alignItems="center" justifyContent="right">
                        <AddIcon fontSize='large' onClick={() => handleCreation()}/>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    );
}