import './../../App.css';
import React from 'react';
import Footer from './../footer/footer.js';
import LorranPic from './../../images/lorranxo.jpg';
import { Button, Card, Header, Icon, Image, Container } from 'semantic-ui-react'

function App() {

  return (
    <div>
      {/*<header className="App-header">
      </header>*/}
      <Container style={{backgroundColor: "white", width:"97%"}}><br/>
        <Header as='h2' icon style={{marginLeft:'35%'}}>
          <Icon name='info circle' />
           Sobre
          <Header.Subheader>
            Saiba mais sobre o Sistema e todo seu desenvolvimento
          </Header.Subheader><br/>
          <Header.Subheader>
          <strong> Tecnologias Utilizadas </strong><br/><br/>
            <span style={{fontSize:'13px'}}><strong>Frontend:</strong> ReactJS, HTML5, CSS, Styled Components, SemanticUI<br/>
            <strong>Backend:</strong> NodeJS<br/>
            <strong>Banco de Dados:</strong> NoSql - MongoDB</span><br/><br/>
          <strong> Organização </strong><br/>
           <span style={{fontSize:'13px'}}>Foram utilizadas as metodologias ágeis Scrum e Kanban nesse projeto.<br/>Versionamento de código Git (Github).</span>
          </Header.Subheader><br/>
        </Header>
          <Card style={{marginLeft:'38%'}}>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={LorranPic}
              />
              <Card.Header>Lorran Oliveira</Card.Header>
              <Card.Meta>Desenvolvedor</Card.Meta>
              <Card.Description>
                Desenvolvedor ReactJS no Frontend e Node no backend. MongoDB no Banco de Dados.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui three buttons'>
                <a href='https://github.com/lorran-xo' rel="noreferrer" style={{textDecoration:'none'}} target="_blank"><Button circular color='github square' icon='github square' /></a>
                <a href='https://www.linkedin.com/in/lorran-oliveira-38194b117' rel="noreferrer" style={{textDecoration:'none'}} target="_blank"><Button circular color='linkedin' icon='linkedin' /></a>
                <a href='https://www.instagram.com/lorran_xo/' rel="noreferrer" style={{textDecoration:'none'}} target="_blank"><Button circular color='instagram' icon='instagram' /></a>
              </div>
            </Card.Content>
          </Card>
      </Container>
      <center style={{margin:'10%'}}><Footer/></center>
    </div>
  );
}

export default App;
