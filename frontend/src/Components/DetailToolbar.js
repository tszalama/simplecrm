import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';


export default function DetailToolbar ( {title, handleEdit} ) {

    return (
        <Toolbar>
            <Grid container alignItems="center">
                <Grid item xs={2}>
                    <Typography variant="h6">{title}</Typography>
                </Grid>
                <Grid item xs={10} container justifyContent="flex-end" alignItems="center">
                    <Grid item xs={1} container alignItems="center" justifyContent="right">
                        <EditIcon fontSize='medium' onClick={() => handleEdit()}/>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    );
}