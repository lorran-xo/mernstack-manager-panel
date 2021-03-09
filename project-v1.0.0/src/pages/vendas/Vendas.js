import './../../App.css';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className="App-header">
      </header>
       <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>This is vendas</MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}

export default App;
