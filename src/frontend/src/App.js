import React, { useEffect } from 'react';
import { Container, Typography, } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { createTheme, ThemeProvider }
  from '@mui/material/styles';
import { observer, inject } from 'mobx-react';

import './App.css';
import DisplayTab from './components/DisplayTab.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#54CCCC',
    },
    secondary: {
      main: '#FAAD00',
    },
  },
  typography: {
    fontFamily: 'Mulish'
  },
});

const App = ({ bookslist }) => {
  useEffect(() => {
    bookslist.fetchBooks(); // Fetch books when component mounts
  }, [bookslist]);

  return (
    <ThemeProvider theme={theme}>
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
          <DisplayTab />
          <br />
          <br />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default inject('bookslist')(observer(App));