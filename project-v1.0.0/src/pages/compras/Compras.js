import './../../App.css';
import React, { useState } from 'react';
import Footer from './../footer/footer.js';
import { GrCart } from 'react-icons/gr';
import { Table, Button,
  Header, Modal, Input, Icon, Popup, Container } from 'semantic-ui-react'

function App() {
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
      <Container style={{backgroundColor: "white", width:"97%"}}><br/>
        <Header as='h2' icon style={{marginLeft:'37%'}}>
          <Icon name='cart' />
           Compras
          <Header.Subheader style={{fontSize:'14px'}}>
            Compre produtos para adicionar em seu Estoque sempre que precisar
          </Header.Subheader>
        </Header>
        <Table basic size='mini'>
          <Table.Header>
            <Popup content='Compre produtos pro Estoque' trigger={<Button style={{margin:'3%'}} onClick={handleOpenBuyPopup}>COMPRAR</Button>} />
            <Header style={{margin:'3%', fontSize:'12px'}}>Descrição: Essa tabela mostra produtos com menos de 5kg no estoque</Header>
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
        </Table><br/>
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
      </Container>
      <center style={{margin:'1%'}}><Footer/></center>
    </div>
  );
}

export default App;
