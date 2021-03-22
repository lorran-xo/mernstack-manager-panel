import './../../App.css';
import React from 'react';
import SalesTable from './components/salesTable';
import Footer from './../footer/footer.js';
import { Header, Icon, Container } from 'semantic-ui-react'

function App() {
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
      </Container>
      <center><Footer/></center>
    </div>
  );
}

export default App;
