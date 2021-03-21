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
      <Container style={{backgroundColor: "white", width:"97%", padding:'3%'}}><br/>
        <Header as='h2' icon style={{marginLeft:'41%'}}>
          <Icon name='archive' />
           Caixa
          <Header.Subheader style={{fontSize:'14px'}}>
            Visualize e venda os produtos disponíveis no estoque
          </Header.Subheader>
        </Header>
          <SalesTable/><br/>
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
      <center style={{marginTop:'-3%'}}><Footer/></center>
    </div>
  );
}

export default App;
