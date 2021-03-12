import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//abas
import Inicio  from './pages/inicio/Inicio';
import Compras from './pages/compras/Compras';
import Caixa from './pages/caixa/Caixa';
import Estoque from './pages/estoque/Estoque';
import Sobre from './pages/sobre/Sobre';
//SemanticUI
import { Button, Grid, Icon, Header } from 'semantic-ui-react'
//icons
import HortiFrutiLogo from './images/hortiFrutiLogo.png';

class AppShell extends Component {
  render() {
    return (
      <div>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column>
              <img src={HortiFrutiLogo} alt="Horti-Fruti-Logo" style={{}}/>
            </Grid.Column>
            <Grid.Column>
              <Button.Group horizontal style={{margin:"5%"}}>
                <Link to='/'><Button labelPosition='right' icon>Início<Icon name='home'/></Button></Link>
                <Link to='/compras'><Button labelPosition='right' icon>Compras<Icon name='cart'/></Button></Link>
                <Link to='/caixa'><Button labelPosition='right' icon>Caixa<Icon name='archive'/></Button></Link>
                <Link to='/estoque'><Button labelPosition='right' icon>Estoque<Icon name='dolly flatbed'/></Button></Link>
                <Link to='/sobre'><Button labelPosition='right' icon>Sobre<Icon name='info circle'/></Button></Link>
              </Button.Group>
              <Header style={{margin:'3%'}}>Saldo: R$ 1200 </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Switch>
          <Route exact path='/' component={ Inicio } />
          <Route path='/compras' component={ Compras } />
          <Route path='/caixa' component={ Caixa } />
          <Route path='/estoque' component={ Estoque } />
          <Route path='/sobre' component={ Sobre } />
        </Switch>
      </div>
    );
  }
}

export default AppShell;