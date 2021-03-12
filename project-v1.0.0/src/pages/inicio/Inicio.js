import './../../App.css';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Header, Icon, Image, Statistic, Segment } from 'semantic-ui-react'

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
      <Paper elevation="0" className={classes.paper}><br/>
        <Header as='h2' icon style={{marginLeft:'37%'}}>
          <Icon name='home' />
            Início
          <Header.Subheader style={{fontSize:'14px'}}>
            Visualize as principais informações do seu Sistema
          </Header.Subheader>
        </Header>
        <Segment>
          <Statistic.Group style={{marginLeft:"35%"}} size='tiny'>
            <Statistic>
              <Statistic.Value>R$ 520</Statistic.Value>
              <Statistic.Label>Em compras</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                R$ 658
              </Statistic.Value>
              <Statistic.Label>Em vendas</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
               3
              </Statistic.Value>
              <Statistic.Label>Produtos</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <h4 style={{marginLeft:'40%', fontSize:'14px'}}> Balanço de R$ 138 em 3 Produtos</h4>
        </Segment>
      </Paper>
    </div>
  );
}

export default App;
