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

  useEffect(() => {  
    callApi();
  },[]);

  async function callApi(){         
    await fetch('http://localhost:9000/')
    .then(res => res.text())
    .then((res) => {
      setApiResponse(res);
      setStatusColor('green');
      console.log("then");
    }).catch((err) => {
      setStatusColor('red');
      console.log("catch");
    })
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
                        <Statistic.Value>R$520</Statistic.Value>
                        <Statistic.Label style={{fontSize:'12px'}}>em compras</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                      <Statistic><br/>
                        <Statistic.Value>R$658</Statistic.Value>
                        <Statistic.Label style={{fontSize:'12px'}}>em vendas</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic><br/>
                          <Statistic.Value>3</Statistic.Value>
                          <Statistic.Label style={{fontSize:'12px'}}>Produtos</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Statistic.Group>
            </Card.Content><br/><br/>
              <center><h3 style={{fontSize:'14px'}}> Balanço de R$ 138 em 3 Produtos</h3><br/><br/>
              <p style={{fontSize:10}}><b>Status do sistema:</b> {apiResponse} <GrStatusGoodSmall style={{color: statusColor }}/></p></center>
            </Card>
      </Container>
      <center><Footer/></center>
    </div>
  );
}

export default App;
