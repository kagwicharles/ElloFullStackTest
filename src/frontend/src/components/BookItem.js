import * as React from 'react';
import { CardContent, Card, CardMedia, Typography, Button, CardActions, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function BookItem({ coverPhotoURL, title }) {

    return (
        <Card sx={{ maxWidth: 345, border: '1px solid #5ACCCC', borderRadius: 2, padding: 1 }} elevation={0}>
            <CardMedia
                sx={{ height: 140 }}
                image={coverPhotoURL}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom component="div" color={"#335c6e"}>
                    {title}
                </Typography>
            </CardContent>
            <CardActions >
                <Grid container spacing={0} >
                    <Grid container direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button variant="contained" startIcon={<AddIcon />} disableElevation={true} sx={{ backgroundColor: '#5ACCCC' }} >
                            Add Book
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}
