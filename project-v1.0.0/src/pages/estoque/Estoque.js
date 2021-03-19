import './../../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './../footer/footer.js';
import { Table, Header, Icon, Container } from 'semantic-ui-react';
function App() {
  
    const [count, setCount] = useState(0);

    useEffect(() => {  
      listStock();
    },[]);
  
    async function listStock(){     
      fetch('http://localhost:9000/listStock').then(res => res.json().then(data =>({data: data}))
      .then(res => {
          console.log(res.data)
      }).catch((err) => {
        console.log("catch");
      }));
    }

  return (
    <div>
      <Container style={{backgroundColor: "white", width:"97%", padding:'3%'}}><br/>
        <Header as='h2' icon style={{marginLeft:'41%'}}>
          <Icon name='cart' />
           Estoque
          <Header.Subheader style={{fontSize:'14px'}}>
            Visualize os produtos do seu estoque e suas informações
          </Header.Subheader>
        </Header>
        <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Código de barras</Table.HeaderCell>
              <Table.HeaderCell>Produto</Table.HeaderCell>
              <Table.HeaderCell>Quantidade disponível (kg)</Table.HeaderCell>
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
      </Container>
      <center style={{margin:'7.7%'}}><Footer/></center>
    </div>
  );
}

export default App;
