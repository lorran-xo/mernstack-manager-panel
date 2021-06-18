import './../../App.css';
import React from 'react';
import Footer from './../footer/footer.js';
import LorranPic from './../../images/lorranxo.jpg';
import { Button, Card, Header, Icon, Image, Container } from 'semantic-ui-react'

function App() {

  return (
    <>
      {/*<header className="App-header">
      </header>*/}
      <Container className="geral"><br/>
      <Card style={{marginLeft:'35%'}}>
        <Header as='h2' icon>
          <Icon name='info circle' />
           Sobre
          <Header.Subheader style={{fontSize:'13px'}}>
            Saiba mais sobre o Painel e todo seu desenvolvimento
          </Header.Subheader><br/>
          <Header.Subheader>
            <strong> Tecnologias </strong><br/>
            <span style={{fontSize:'13px'}}><strong>Frontend:</strong> ReactJS, HTML5, CSS, Styled Components, SemanticUI.<br/>
            <strong>Backend:</strong> NodeJS, Express, Mongoose, Nodemon.<br/>
            <strong>Banco de Dados:</strong> NoSQL (MongoDB).</span><br/><br/>
            <strong> Organização </strong><br/>
            <span style={{fontSize:'13px'}}>Foram utilizadas as metodologias ágeis Scrum e Kanban nesse projeto.<br/>Versionamento de código Git (Github).</span><br/>
            <br/><strong> Repositório </strong><br/>
            <span style={{fontSize:'13px'}}>Acesse o repositório do painel clicando <a href="https://github.com/lorran-xo/mernstack-manager-panel" target="_blank" rel="noreferrer">aqui</a>.</span>
          </Header.Subheader><br/>
        </Header>
            <Card.Content>
              <Image
                alt="Author picture"
                floated='right'
                size='mini'
                src={LorranPic}
              />
              <Card.Header>Lorran Oliveira</Card.Header>
              <Card.Meta>Desenvolvedor Full-Stack</Card.Meta>
              <Card.Description>
                Projeto de Análise e Desenvolvimento de Sistemas<br/><br/>
                Matrícula: 201903161622
              </Card.Description>
            </Card.Content>
              <Card.Content extra>
                <div className='ui three buttons' style={{marginLeft:'25%'}}>
                  <a href='https://github.com/lorran-xo' rel="noreferrer" style={{textDecoration:'none'}} target="_blank"><Button circular color='github square' icon='github square' /></a>
                  <a href='https://www.linkedin.com/in/lorran-oliveira-38194b117' rel="noreferrer" style={{textDecoration:'none'}} target="_blank"><Button circular color='linkedin' icon='linkedin' /></a>
                  <a href='https://www.instagram.com/lorran_xo/' rel="noreferrer" style={{textDecoration:'none'}} target="_blank"><Button circular color='Instagram' icon='instagram' /></a>
                </div>
              </Card.Content>
          </Card><br/>
      </Container>
      <center style={{marginTop:'-3%'}}><Footer/></center>
    </>
  );
}

export default App;