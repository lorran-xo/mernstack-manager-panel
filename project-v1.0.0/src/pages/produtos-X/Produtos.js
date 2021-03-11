import './../../App.css';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Button,
  Header,
  Segment,
  TransitionablePortal } from 'semantic-ui-react'

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

  {/*
  portals: https://react.semantic-ui.com/addons/transitionable-portal/#types-portal
  confirm dialog portals: https://react.semantic-ui.com/addons/confirm/
  */}
      <Paper elevation="0" className={classes.paper}>
        <Table basic size='small' style={{margin:"2%"}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Produto</Table.HeaderCell>
              <Table.HeaderCell>Preço compra</Table.HeaderCell>
              <Table.HeaderCell>Preço revenda</Table.HeaderCell>
              <Table.HeaderCell>Quantidade</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1527</Table.Cell>
              <Table.Cell>Pão de forma</Table.Cell>
              <Table.Cell>2,00</Table.Cell>
              <Table.Cell>5,00</Table.Cell>
              <Table.Cell>13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2347</Table.Cell>
              <Table.Cell>Bolo de pote</Table.Cell>
              <Table.Cell>7,00</Table.Cell>
              <Table.Cell>16,50</Table.Cell>
              <Table.Cell>25</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>9132</Table.Cell>
              <Table.Cell>Manteiga</Table.Cell>
              <Table.Cell>3,60</Table.Cell>
              <Table.Cell>8,00</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Paper>
    </div>
  );
}

export default App;
