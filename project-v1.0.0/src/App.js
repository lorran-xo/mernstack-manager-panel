import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//abas
import Inicio  from './pages/inicio/Inicio';
import Compras from './pages/compras/Compras';
import Caixa from './pages/caixa/Caixa';
import Estoque from './pages/estoque/Estoque';
import Sobre from './pages/sobre/Sobre';
//SemanticUI
import { Button, Grid } from 'semantic-ui-react'
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
                <Link to='/'> <Button>Início</Button> </Link>
                <Link to='/compras'><Button>Compras</Button></Link>
                <Link to='/caixa'><Button>Caixa</Button></Link>
                <Link to='/estoque'><Button>Estoque</Button></Link>
                <Link to='/sobre'><Button>Sobre</Button></Link>
              </Button.Group>
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