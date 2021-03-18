import './../../App.css';
import React, { useState, useEffect } from 'react';
import Footer from './../footer/footer.js';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { Header, Icon, Container, Grid, Statistic, Segment, Card } from 'semantic-ui-react'
import styled from 'styled-components'

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
      <Container style={{backgroundColor: "white", width:"97%"}}><br/>
        <Header as='h2' icon style={{marginLeft:'37%'}}>
          <Icon name='home' />
            Início
          <Header.Subheader style={{fontSize:'14px'}}>
            Visualize as principais informações do seu Sistema<br/>
          </Header.Subheader>
        </Header>
          <Card style={{marginLeft:'38%'}}>
            <Card.Content style={{marginLeft:'10%'}}>
              <Statistic.Group size='tiny' >
                <Grid>
                  <Grid.Row container columns={4}>
                    <Grid.Column>
                      <Statistic>
                        <Statistic.Value>R$ 520</Statistic.Value>
                        <Statistic.Label>Em compras</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                      <Statistic>
                        <Statistic.Value>
                          R$ 658
                        </Statistic.Value>
                        <Statistic.Label>Em vendas</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                      <Statistic>
                        <Statistic.Value>
                          3
                        </Statistic.Value>
                        <Statistic.Label>Produtos</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                    <h4 style={{fontSize:'14px', marginLeft:'11%'}}> Balanço de R$ 138 em 3 Produtos</h4>
                    <p style={{fontSize:9, marginLeft:'33%'}}>Sistema {apiResponse} <GrStatusGoodSmall style={{color: statusColor }}/></p>
                  </Grid.Row>
                </Grid>
              </Statistic.Group>
            </Card.Content>
          </Card><br/><br/><br/>
      </Container>
      <center style={{margin:'10%'}}><Footer/></center>
    </div>
  );
}

export default App;
