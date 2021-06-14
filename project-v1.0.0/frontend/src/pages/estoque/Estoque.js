import './../../App.css';
import React from 'react';
import StockTable from './components/stockTable';
import Footer from './../footer/footer.js';
import { Header, Icon, Container } from 'semantic-ui-react';
function App() {

  return (
    <>
      <Container className="geral"><br/>
        <Header as='h2' icon style={{marginLeft:'35%'}}>
          <Icon name='cart' />
           Estoque
          <Header.Subheader style={{fontSize:'15px'}}>
            Visualize os produtos do seu estoque e suas informações
          </Header.Subheader>
        </Header>
        <StockTable/>
      </Container>
      <center><Footer/></center>
    </>
  );
}

export default App;
