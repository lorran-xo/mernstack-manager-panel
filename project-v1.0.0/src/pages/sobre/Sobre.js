import './../../App.css';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import LorranPic from './../../images/lorranxo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Header, Icon, Image, Grid } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
    const classes = useStyles();

  return (
    <div>
      {/*<header className="App-header">
      </header>*/}
      <Paper elevation="0" className={classes.paper}>
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
          <Card style={{marginLeft:'39%'}}>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={LorranPic}
              />
              <Card.Header>Lorran Oliveira</Card.Header>
              <Card.Meta>Desenvolvedor</Card.Meta>
              <Card.Description>
                Desenvolvedor ReactJS no Frontend, NodeJS no backend e MongoDB NoSql no Banco de Dados.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui three buttons'>
                <a href='https://github.com/lorran-xo' style={{textDecoration:'none'}} target="_blank"><Button circular color='github square' icon='github square' /></a>
                <a href='https://www.linkedin.com/in/lorran-oliveira-38194b117' style={{textDecoration:'none'}} target="_blank"><Button circular color='linkedin' icon='linkedin' /></a>
                <a href='https://www.instagram.com/lorran_xo/' style={{textDecoration:'none'}} target="_blank"><Button circular color='instagram' icon='instagram' /></a>
              </div>
            </Card.Content>
          </Card>
        {/*<Card.Group style={{margin:'5%'}}>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
              />
              <Card.Header>Molly Thomas</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
              />
              <Card.Header>Jenny Lawrence</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Jenny requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>*/}
      </Paper>
    </div>
  );
}

export default App;
