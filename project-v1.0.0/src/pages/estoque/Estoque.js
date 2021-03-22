import './../../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockTable from './components/stockTable';
import Footer from './../footer/footer.js';
import { Header, Icon, Container } from 'semantic-ui-react';
function App() {
  
    useEffect(() => {  
    },[]);

  return (
    <div>
      <Container style={{backgroundColor: "white", width:"90%", padding:'5%'}}><br/>
        <Header as='h2' icon style={{marginLeft:'38%'}}>
          <Icon name='cart' />
           Estoque
          <Header.Subheader style={{fontSize:'15px'}}>
            Visualize os produtos do seu estoque e suas informações
          </Header.Subheader>
        </Header>
        <StockTable/>
      </Container>
      <center><Footer/></center>
    </div>
  );
}

export default App;
