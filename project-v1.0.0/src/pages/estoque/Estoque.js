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
      <Container style={{backgroundColor: "white", width:"97%", padding:'3%'}}><br/>
        <Header as='h2' icon style={{marginLeft:'40%'}}>
          <Icon name='cart' />
           Estoque
          <Header.Subheader style={{fontSize:'14px'}}>
            Visualize os produtos do seu estoque e suas informações
          </Header.Subheader>
          <StockTable/>
        </Header>
      </Container>
      <center style={{margin:'12%', marginLeft:'9%'}}><Footer/></center>
    </div>
  );
}

export default App;
