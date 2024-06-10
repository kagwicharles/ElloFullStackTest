import * as React from 'react';
import {CardContent, Card, CardMedia, Typography} from '@mui/material';

export default function BookItem({ coverPhotoURL, title }) {

    return (
        <Card sx={{ maxWidth: 345, border: '1px solid #5ACCCC', borderRadius: 2, padding: 1}} elevation={0}>
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
            {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
    );
}
