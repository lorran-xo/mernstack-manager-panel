import './../../App.css';
import React, { useState, useEffect } from 'react';
import Footer from './../footer/footer.js';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { Header, Icon, Container, Grid, Statistic, Card } from 'semantic-ui-react'
//import styled from 'styled-components'

function App() {

  /*const styledContainer = styled.Container`
    margin:'10%'
  `;*/

  const [apiResponse, setApiResponse] = useState('offline');
  const [statusColor, setStatusColor] = useState('red');
  const [qtProducts, setQtProducts] = useState('...');
  const [totalPurchases, setTotalPurchases] = useState('...');
  const [totalSales, setTotalSales] = useState('...');
  const [profit, setProfit] = useState('...');


  useEffect(() => {  
    callApi();
    getDashboard();
  },[]);

  async function callApi(){         
    await fetch('http://localhost:9000/')
    .then(res => res.text())
    .then((res) => {
      setApiResponse(res);
      setStatusColor('green');
    }).catch((err) => {
      setStatusColor('red');
    })
  }

  async function getDashboard(){
    fetch('http://localhost:9000/listFinancials').then(res => res.json().then(data =>({data: data}))
      .then((res) => {
        let convertProfit = res.data[0].totalSales - res.data[0].totalPurchases;
        setQtProducts(res.data[0].qtProducts);
        setTotalPurchases(res.data[0].totalPurchases.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})); 
        setTotalSales(res.data[0].totalSales.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        setProfit(convertProfit.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      }).catch((err) => {
        console.log(err);
      }));
  }

  return (
    <div>
      <Container style={{backgroundColor: "white", width:"90%", padding:'5%'}}><br/>
        <Header as='h2' icon style={{marginLeft:'40%'}}>
          <Icon name='home' />
            Início
          <Header.Subheader style={{fontSize:'15px'}}>
            Visualize as principais informações do seu Sistema
          </Header.Subheader><br/>
        </Header>
          <Card style={{marginLeft:'41%'}}> 
            <Card.Content style={{marginLeft:'10%', margin:"5%"}}>
              <Statistic.Group size='tiny'>
                <h2 style={{marginLeft:'25%', fontFamily:'Courier New'}}>RESULTADOS</h2>
                <Grid class="ui grid">
                  <Grid.Row container columns={3}>
                    <Grid.Column>
                      <Statistic><br/>
                        <Statistic.Value><span style={{fontSize:'15px'}}>{totalPurchases}</span></Statistic.Value>
                        <Statistic.Label style={{fontSize:'12px'}}>em compras</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                      <Statistic><br/>
                        <Statistic.Value><span style={{fontSize:'15px'}}>{totalSales}</span></Statistic.Value>
                        <Statistic.Label style={{fontSize:'12px'}}>em vendas</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic><br/>
                          <Statistic.Value><span style={{fontSize:'15px'}}>{qtProducts}</span></Statistic.Value>
                          <Statistic.Label style={{fontSize:'12px'}}>Produtos</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Statistic.Group>
            </Card.Content><br/><br/>
              <center><h3 style={{fontSize:'14px'}}> Balanço de {profit} em {qtProducts} Produtos</h3><br/><br/>
              <p style={{fontSize:10}}><b>Status do sistema:</b> {apiResponse} <GrStatusGoodSmall style={{color: statusColor }}/></p></center>
            </Card>
      </Container>
      <center><Footer/></center>
    </div>
  );
}

export default App;
