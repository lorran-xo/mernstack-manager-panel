import './../../App.css';
import React, { useState } from 'react';
import SalesTable from './components/salesTable';
import Footer from './../footer/footer.js';
import { GrCart } from 'react-icons/gr';
import { Table, Button,
  Header, Modal, Input, Icon, Popup, Container } from 'semantic-ui-react'

function App() {

    const [openSellPopup, setOpenSellPopup] = useState(false);
    const [passingLoadingTable] = useState(React.createRef());

    function handleOpenSellPopup(){
      setOpenSellPopup(true);
    }

    function handleCloseSellPopup(){
      setOpenSellPopup(false);
    }

    function handleConfirmSellPopup(){
      setOpenSellPopup(false);
      console.log("Venda efetuada!");
      updateTable();
    }

    function updateTable(){
      passingLoadingTable.current.loadData();
    }

  return (
     <div>
      <Container style={{backgroundColor: "white", width:"90%", padding:'5%'}}><br/>
        <Header as='h2' icon style={{marginLeft:'40%'}}>
          <Icon name='archive' />
           Caixa
          <Header.Subheader style={{fontSize:'15px'}}>
            Visualize e venda os produtos disponíveis no estoque
          </Header.Subheader>
        </Header><br/>
        <SalesTable/>
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
      <center><Footer/></center>
    </div>
  );
}

export default App;
