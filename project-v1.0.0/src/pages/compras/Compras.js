import './../../App.css';
import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { GiMoneyStack } from 'react-icons/gi';
import { Table, Button,
  Header,
  Segment,
  TransitionablePortal, Portal, Input, Icon } from 'semantic-ui-react'

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

    const [openBuyPopup, setOpenBuyPopup] = useState(false);

    function handleOpenBuyPopup(){
      setOpenBuyPopup(true);
    }

    function handleCloseBuyPopup(){
      setOpenBuyPopup(false);
    }

    function handleConfirmBuyPopup(){
      setOpenBuyPopup(false);
      console.log("Compra efetuada!");
    }

  {/*
    portals: https://react.semantic-ui.com/addons/transitionable-portal/#types-portal
    confirm dialog portals: https://react.semantic-ui.com/addons/confirm/
  */}

  return (
    <div>
      <Paper elevation="0" className={classes.paper}>
        {/*Portal*/}
        <Table basic size='small' style={{margin:"2%"}}>
          <Table.Header>
            <Button style={{margin:'3%'}} onClick={handleOpenBuyPopup}>COMPRAR</Button>
            <Header style={{margin:'3%'}}>Estoque atual</Header>
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
        <div>
          <Portal onClose={handleCloseBuyPopup} open={openBuyPopup}>
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '50%',
                zIndex: 1000,
              }}
            >
              <Header>Comprar produto</Header>
              <p>Preencha abaixo com as informações do produto à comprar para adicionar no estoque.</p>

              <Input focus placeholder='Nome' style={{margin:'2%'}}/>
              <Input focus labelPosition='right' placeholder='Quantidade' label={{ basic: true, content: 'kg' }}/><br/>
              <Input focus labelPosition='left' placeholder='Valor de compra' label={{ basic: true, content: 'R$' }} style={{margin:'2%'}}/>
              <Input focus labelPosition='left' placeholder='Valor de revenda' label={{ basic: true, content: 'R$' }}/><br/><br/>

              <Button
                content='Comprar'
                positive
                onClick={handleConfirmBuyPopup}
              />
              <Button
                content='Cancelar'
                negative
                onClick={handleCloseBuyPopup}
              />
            </Segment>
          </Portal>
        </div>
      </Paper>
    </div>
  );
}

export default App;
