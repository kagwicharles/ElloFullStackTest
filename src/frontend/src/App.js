import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container, Typography, TextField, Autocomplete } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import './App.css';
import { fetchBooks } from './api/apiservice.js';
import DisplayTab from './components/DisplayTab.js';

const App = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetchBooks()
      .then(result => {
        setBooks(result.data.books);
        console.log(books);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container >
      <div className="App">
        <br sx={{ height: 50 }} />
        <AutoStoriesIcon sx={{ fontSize: 150, color: "#5ACCCC" }} />
        <br />
        <br />

        <Typography variant="h4" component="h3" color={"#335c6e"}>
         Students Books Assignment
        </Typography>

        <br />
        <br />

        {books === null || books === undefined || books.length === 0 ?
          (<div></div>) : (

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"

            >
              <Grid item xs={4}>

                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={books.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search book title"
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                    />)}
                />
              </Grid>
            </Grid>

          )}
        <br />
        <br />
        <DisplayTab books={books} />
        <br />
        <br />
      </div>
    </Container>
  );
}

export default App;
