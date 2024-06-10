import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { observer, inject } from 'mobx-react';

import BookItem from './BookItem';
import SearchBar from '../components/SearchBar';

const DisplayTab = ({ bookslist }) => {
    var filteredBooks;
    const [searchQuery, setSearchQuery] = useState('');
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const toggleAssignStatus = (bookTitle) => {
        const book = bookslist.books.find((book) => book.title === bookTitle);
        if (book) {
            bookslist.toggleAssignStatus(bookTitle);
        }
    };

    const onInputChange = (title) => {
        setSearchQuery(title);
    }

    if (searchQuery !== "") {
        filteredBooks = bookslist.books.filter(book =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    } else{
        filteredBooks = bookslist.books;
    }

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
                    {bookslist.books === null || bookslist.books === undefined || bookslist.books.length === 0 ?
                        (<div>No Books Found!</div>) : (
                            <div>
                                <br />
                                <br />
                                <SearchBar onInputChange={onInputChange} />
                                <br />
                                <br />
                                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 12, md: 12 }}>
                                    {
                                        filteredBooks.map((book, index) => (
                                            <Grid xs={8} sm={6} md={4} lg={3} index={index}>
                                                <BookItem book={book} onToggle={toggleAssignStatus} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </div>
                        )
                    }</TabPanel>
                <TabPanel value="2">
                    {bookslist.books
                        .filter((book) => book.isAssigned === true) === 0 ?
                        (<div>No reading list yet!</div>) : (
                            <div>
                                <br />
                                <br />

                                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 12, md: 12 }}>
                                    {
                                        bookslist.books
                                            .filter((book) => book.isAssigned === true)
                                            .map((book, index) => (
                                                <Grid xs={8} sm={6} md={4} lg={3} index={index}>
                                                    <BookItem book={book} onToggle={toggleAssignStatus} />
                                                </Grid>
                                            ))
                                    }
                                </Grid>
                            </div>
                        )
                    }</TabPanel>
            </TabContext>
        </Box>
    );
}


export default inject('bookslist')(observer(DisplayTab));