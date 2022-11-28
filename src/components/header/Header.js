import React, {useCallBack} from "react";
import { debouncedSearch } from "../utilities/Utilities";
import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from 'mui/material/styles';
import './Header.css';

const Header = ({query, setQuery}) => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#fff',
      }
    }
  })

  return (
    <div className = 'header'>
      <span className="title">{query ? query : 'Recipes'} </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
        <TextField
        id='standard-basic'
        label = 'Search Recipes'
        Variant ='standard'
        className="Search"
        />
        </ThemeProvider>
      </div>
    </div>
  )
}

