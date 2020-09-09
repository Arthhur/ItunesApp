import React from "react";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../Search/Search.css';

interface ISearch {
    query: string,
    change(event: React.ChangeEvent<HTMLInputElement>): void
}
const Search: React.FC<ISearch> = ({query, change}) => {

    return (
        <Paper 
            component="form"
            className="search-input"
        >
            <InputBase
                placeholder="Rechercher un artiste"
                inputProps={{ 'aria-label': 'rechercher un artiste' }}
                value={query}
                onChange={change}
            />
            <IconButton 
                type="submit" 
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default Search;