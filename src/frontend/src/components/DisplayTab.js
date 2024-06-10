import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import BookItem from './BookItem';


export default function DisplayTab({ books }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', alignItems: 'center' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="All Books" value="1" />
                        <Tab label="Reading List" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {books === null || books === undefined || books.length === 0 ?
                        (<div>No Books Found!</div>) : (
                            <div>
                                <br />
                                <br />

                                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 12, md: 12 }}>
                                    {
                                        books.map((item, index) => (
                                            <Grid xs={8} sm={6} md={4} lg={3} index={index}>
                                                <BookItem title={item.title} coverPhotoURL={item.coverPhotoURL} />

                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </div>
                        )
                    }</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
}
