import './../../App.css';
import React, { useState } from 'react';
import Footer from './../footer/footer.js';
import { GrCart } from 'react-icons/gr';
import { Table, Button,
  Header, Modal, Input, Icon, Popup, Container } from 'semantic-ui-react'

function App() {

    const [openSellPopup, setOpenSellPopup] = useState(false);

    function handleOpenSellPopup(){
      setOpenSellPopup(true);
    }

    function handleCloseSellPopup(){
      setOpenSellPopup(false);
    }

    function handleConfirmSellPopup(){
      setOpenSellPopup(false);
      console.log("Venda efetuada!");
      window.location.reload();
    }

  return (
     <div>
      <Container style={{backgroundColor: "white", width:"97%"}}><br/>
        <Header as='h2' icon style={{marginLeft:'40%'}}>
          <Icon name='archive' />
           Caixa
          <Header.Subheader style={{fontSize:'14px'}}>
            Visualize e venda os produtos disponíveis no estoque
          </Header.Subheader>
        </Header>
        <Table basic size='mini'>
          <Table.Header>
            <Popup content='Venda produtos disponíveis no Estoque' trigger={<Button style={{margin:'3%'}} onClick={handleOpenSellPopup}>VENDER</Button>} />
            <Header style={{margin:'3%', fontSize:'12px'}}>Descrição: Essa tabela mostra os produtos disponíveis no Estoque para venda</Header>
            <Table.Row>
              <Table.HeaderCell>Código de barras</Table.HeaderCell>
              <Table.HeaderCell>Produto</Table.HeaderCell>
              <Table.HeaderCell>Quantidade (kg)</Table.HeaderCell>
              <Table.HeaderCell>Preço compra (kg)</Table.HeaderCell>
              <Table.HeaderCell>Preço revenda (kg)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          <Table.Row>
              <Table.Cell>789.823426.51238</Table.Cell>
              <Table.Cell>Tomate</Table.Cell>
              <Table.Cell>25</Table.Cell>
              <Table.Cell>4,00</Table.Cell>
              <Table.Cell>5,20</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>789.364726.55493</Table.Cell>
              <Table.Cell>Batata</Table.Cell>
              <Table.Cell>40</Table.Cell>
              <Table.Cell>3,00</Table.Cell>
              <Table.Cell>4,50</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>789.824426.23738</Table.Cell>
              <Table.Cell>Cenoura</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>3,30</Table.Cell>
              <Table.Cell>4,00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>789.812346.74514</Table.Cell>
              <Table.Cell>Banana</Table.Cell>
              <Table.Cell>60</Table.Cell>
              <Table.Cell>3,00</Table.Cell>
              <Table.Cell>6,00</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table><br/>
        <div>
          <Modal
            onClose={handleCloseSellPopup} 
            onOpen={handleConfirmSellPopup} 
            open={openSellPopup}
          >
            <Modal.Header>Vender um produto</Modal.Header>
            <Modal.Content image>
              <GrCart style={{width:"250px", height:"250px"}} wrapped />
              <Modal.Description>
                <p>
                  Preencha abaixo com as informações do produto disponível no estoque para vende-lo.
                </p>
                <Input focus label="Código de Barras" placeholder='789.9999.99999' style={{margin:'2%'}}/><br/>
                <Input focus label="Quantidade" placeholder='kg'/><br/><br/>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                content='Cancelar'
                negative
                onClick={handleCloseSellPopup}
              />
              <Button
                content='Vender'
                icon='checkmark'
                labelPosition='right'
                positive
                onClick={handleConfirmSellPopup}
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
