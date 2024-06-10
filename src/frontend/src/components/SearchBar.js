import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Autocomplete } from '@mui/material';
import { observer, inject } from 'mobx-react';


const SearchBar = ({ bookslist, onInputChange }) => {

    const onBookTitleSelected = (event, value) => {
        onInputChange(value);
    };

    return (
        <div>
            {bookslist === null || bookslist === undefined || bookslist.length === 0 ?
                (<div></div>) : (

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"

                    >
                        <Grid item xs={5}>

                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={bookslist.books.map((book) => book.title)}
                                color='#CFFFAFA'
                                onInputChange={onBookTitleSelected}
                                renderInput={(params) => (
                                    <TextField
                                        color='primary'
                                        size='small'
                                        variant='outlined'
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

        </div>
    );
}

export default inject('bookslist')(observer(SearchBar));