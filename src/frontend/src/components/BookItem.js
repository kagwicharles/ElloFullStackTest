import * as React from 'react';
import { CardContent, Card, CardMedia, Typography, Button, CardActions, Grid } from '@mui/material';

const BookItem = ({ book, onToggle }) => {


    const handleToggle = () => {
        onToggle(book.title);
    };



    return (
        <div>
            <Card sx={{ maxWidth: 345, border: '1px solid #5ACCCC', borderRadius: 2, padding: 1 }} elevation={0}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={book.coverPhotoURL}
                    title={book.title}
                />
                <CardContent>
                    <Typography gutterBottom component="div" color={"#335c6e"}>
                        {book.title}
                    </Typography>
                    <Typography variant='subtitle2' component="p">
                        by "{book.author}"
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container spacing={0}>
                        <Grid container direction="row"
                            alignItems="end"
                            justifyContent="center"
                        >
                            {book.isAssigned ?
                                <Button variant="outlined" disableElevation={true} color='secondary' onClick={handleToggle}>
                                    Remove
                                </Button> :
                                <Button variant="contained" disableElevation={true} color='primary' onClick={handleToggle}>
                                    Assign Book
                                </Button>
                            }


                        </Grid>
                    </Grid>
                </CardActions>
            </Card>

        </div>
    );
}


export default BookItem;