import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

export default function TableToolbar ( {title, handleCreation} ) {
    return (
        <Toolbar>
            <Grid container alignItems="center">
                <Grid item xs={12} md={2} >
                    <Typography variant="h6">{title}</Typography>
                </Grid>
                <Grid item xs={12} md={10} container justifyContent="flex-end" alignItems="center">
                    <Grid item xs={11} container alignItems="center" justifyContent="left">
                        <TextField id="input-with-sx" label="Search" variant="outlined" size='small'/>
                        <SearchIcon />
                    </Grid>
                    <Grid item xs={1} container alignItems="center" justifyContent="right">
                        <AddIcon fontSize='large' onClick={() => handleCreation()}/>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    );
}