import {Grid, TextField} from '@mui/material';

export default function CustomerFormContent({id, name, setName, email, setEmail, readMode, editMode, creationMode}) {

    CustomerFormContent.defaultProps = {
        readMode: false,
        editMode: false,
        creationMode: false,
    };

    return(
        <Grid container alignItems="left">
            <Grid item xs={6} md={3} >
                {!creationMode && id && <TextField
                    label="Id"
                    InputProps={{
                        readOnly: readMode,
                    }}
                    value={id}
                />}
            </Grid>
            <Grid item xs={6} md={3} >
                <TextField
                    label="Name"
                    InputProps={{
                        readOnly: readMode,
                        required: editMode || creationMode
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid> 
            <Grid item xs={6} md={3} >
                <TextField
                    label="Email"
                    InputProps={{
                        readOnly: readMode,
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
        </Grid>
    )
}