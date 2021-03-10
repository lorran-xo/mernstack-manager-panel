import './../../App.css';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Image, Statistic, Segment } from 'semantic-ui-react'

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
    <div>
      <Paper elevation="0" className={classes.paper}>
        <Segment >
          <Statistic.Group style={{marginLeft:"30%"}} size='tiny'>
            <Statistic>
              <Statistic.Value>R$ 1,600</Statistic.Value>
              <Statistic.Label>Em compras</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                R$ 3,200
              </Statistic.Value>
              <Statistic.Label>Em vendas</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
               12
              </Statistic.Value>
              <Statistic.Label>Produtos</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
      </Paper>
    </div>
  );
}

export default App;
