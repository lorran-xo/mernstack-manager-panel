import './../../App.css';
import React, { useState, useEffect } from 'react';
import Footer from './../footer/footer.js';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { Header, Icon, Container, Grid, Statistic, Card } from 'semantic-ui-react'

function App() {
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
      }));
  }

  return (
    <>
      <Container className="geral"><br/>
          <Card style={{marginLeft:'35%'}}> 
            <Card.Content style={{marginLeft:'13%', margin:"5%"}}>
              <Statistic.Group size='tiny'>
                <Grid class="ui grid">
                  <Grid.Row container columns={1}>
                    <Grid.Column>
                      <Header as='h2' icon>
                        <Icon name='chart line'/>
                          Dashboard
                        <Header.Subheader>
                          Visualize as principais informações do seu Sistema
                        </Header.Subheader><br/>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
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
    </>
  );
}

export default App;
