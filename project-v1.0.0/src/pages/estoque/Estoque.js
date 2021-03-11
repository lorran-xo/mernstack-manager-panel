import './../../App.css';
import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { GrAdd } from 'react-icons/gr';
import { Table, Button,
  Header,
  Segment,
  TransitionablePortal } from 'semantic-ui-react';


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

    const [count, setCount] = useState(0);

    function handleClick(){
      setCount(count+1);
      console.log("Vezes que o botão foi clicado: ", count);
    }

  return (
    <div>
  {/*
  portals: https://react.semantic-ui.com/addons/transitionable-portal/#types-portal
  confirm dialog portals: https://react.semantic-ui.com/addons/confirm/
  */}
      <Paper elevation="0" className={classes.paper}>
        <Table basic size='small' style={{margin:"2%"}}>
          <Table.Header>
          <Button style={{margin:'3%'}} onClick={handleClick} icon={GrAdd}/>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Produto</Table.HeaderCell>
              <Table.HeaderCell>Quantidade (kg)</Table.HeaderCell>
              <Table.HeaderCell>Preço compra</Table.HeaderCell>
              <Table.HeaderCell>Preço revenda (kg)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1527</Table.Cell>
              <Table.Cell>Tomate</Table.Cell>
              <Table.Cell>25</Table.Cell>
              <Table.Cell>90,00</Table.Cell>
              <Table.Cell>5,20</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2347</Table.Cell>
              <Table.Cell>Batata</Table.Cell>
              <Table.Cell>40</Table.Cell>
              <Table.Cell>120,00</Table.Cell>
              <Table.Cell>4,50</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>9132</Table.Cell>
              <Table.Cell>Banana</Table.Cell>
              <Table.Cell>60</Table.Cell>
              <Table.Cell>310,00</Table.Cell>
              <Table.Cell>6,00</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Paper>
    </div>
  );
}

export default App;
