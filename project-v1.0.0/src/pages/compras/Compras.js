import './../../App.css';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { GrCart } from 'react-icons/gr';
import { Table, Button,
  Header, Modal, Input, Icon, Popup } from 'semantic-ui-react'

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
    const [balance, setBalance] = useState(1200);
    const [quantity, setQuantity] = useState(0);
    const [productValue, setProductValue] = useState(0);
  {/*
    const [balance, setBalance] = useState(1200);
    const [quantity, setQuantity] = useState(0);
    const [productValue, setProductValue] = useState(0);
    const [disableBuyButton, setDisableBuyButton] = useState(false);
    const [buyPrice, setBuyPrice] = useState(0);
    const [afterBuyingBalance, setAfterBuyingBalance] = useState(balance);
    const [buyButtonPopup, setBuyButtonPopup] = useState('');
      setAfterBuyingBalance(balance - buyPrice);

      if(afterBuyingBalance > balance){
        setDisableBuyButton(true);
        setBuyButtonPopup("Você não tem saldo suficiente.");
      } else {
        setDisableBuyButton(false);
        setBuyButtonPopup("");
        setOpenBuyPopup(false);
        console.log("Compra efetuada!");
        window.location.reload();
      }

  */}

    function handleOpenBuyPopup(){
      setOpenBuyPopup(true);
    }

    function handleCloseBuyPopup(){
      setOpenBuyPopup(false);
    }

    function handleConfirmBuyPopup(){
      setOpenBuyPopup(false);
      console.log("Compra efetuada!");
      window.location.reload();
    }


    const handleProductQuantity = (e) => {
      setQuantity(e);
    }

    const handleProductValue = (e) => {
      setProductValue(e);
    }

  return (
    <div>
      <Paper elevation="0" className={classes.paper}><br/>
        <Header as='h2' icon style={{marginLeft:'37%'}}>
          <Icon name='cart' />
           Compras
          <Header.Subheader style={{fontSize:'14px'}}>
            Compre produtos para adicionar em seu Estoque sempre que precisar
          </Header.Subheader>
        </Header>
        <Table basic size='small' style={{margin:"2%"}}>
          <Table.Header>
            <Popup content='Compre produtos pro Estoque' trigger={<Button style={{margin:'3%'}} onClick={handleOpenBuyPopup}>COMPRAR</Button>} />
            <Header style={{margin:'3%'}}>Produtos com menos de 5kg no estoque:</Header>
            <Table.Row>
              {/*<Table.HeaderCell>Id</Table.HeaderCell>*/}
              <Table.HeaderCell>Produto</Table.HeaderCell>
              <Table.HeaderCell>Quantidade (kg)</Table.HeaderCell>
              <Table.HeaderCell>Preço compra (kg)</Table.HeaderCell>
              <Table.HeaderCell>Preço revenda (kg)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cenoura</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>3,30</Table.Cell>
              <Table.Cell>4,00</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div>
          <Modal
            onClose={handleCloseBuyPopup} 
            onOpen={handleConfirmBuyPopup} 
            open={openBuyPopup}
          >
            <Modal.Header>Comprar um produto</Modal.Header>
            <Modal.Content image>
              <GrCart style={{width:"250px", height:"250px"}} wrapped />
              <Modal.Description>
                {/*<Header>Default Profile Image</Header>*/}
                <p>
                  Preencha abaixo com as informações do produto à comprar para adicionar no estoque.
                </p>
                <Input focus placeholder='Nome' style={{margin:'2%'}}/>
                <Input focus labelPosition='right' value={quantity} onChange={e => handleProductQuantity(e.target.value)} placeholder='Quantidade' label={{ basic: true, content: 'kg' }}/><br/>
                <Input focus labelPosition='left' value={productValue}  onChange={e => handleProductValue(e.target.value)} placeholder='Valor de compra (kg)' label={{ basic: true, content: 'R$' }} style={{margin:'2%'}}/>
                <Input focus labelPosition='left' placeholder='Valor de revenda (kg)' label={{ basic: true, content: 'R$' }}/><br/><br/>
                <p>Saldo: R${balance}</p>
                <p>Valor dessa compra: R${quantity * productValue}</p>
                <p>Saldo após a compra: R${balance - (quantity * productValue)}</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                content='Cancelar'
                negative
                onClick={handleCloseBuyPopup}
              />
              <Button
                content='Comprar'
                icon='checkmark'
                labelPosition='right'
                positive
                onClick={handleConfirmBuyPopup}
              />
            </Modal.Actions>
          </Modal>
        </div>
      </Paper>
    </div>
  );
}

export default App;
