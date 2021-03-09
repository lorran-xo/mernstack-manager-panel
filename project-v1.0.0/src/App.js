import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Inicio  from './pages/inicio/Inicio';
import Produtos from './pages/produtos/Produtos';
import Caixa from './pages/caixa/Caixa';
import Vendas from './pages/vendas/Vendas';
import Estoque from './pages/estoque/Estoque';
import Financeiro from './pages/financeiro/Financeiro';
import Sobre from './pages/sobre/Sobre';
import Grid from '@material-ui/core/Grid';
import { Button } from 'semantic-ui-react'

//icons
import { MdLocalGroceryStore} from 'react-icons/md';


class AppShell extends Component {
  render() {
    return (
      <div>
        <h1><MdLocalGroceryStore style={{width:'40px', height: '25px'}}/> 
          <span style={{fontFamily:'Garamond'}}>MerceariaManager</span>
        </h1>
        <center style={{marginTop:'-3%', marginRight:"10%"}}>
          <Button.Group horizontal style={{marginBottom:'4%'}}>
            <Link to='/'> <Button>Início</Button> </Link>
            <Link to='/produtos'><Button>Produtos</Button></Link>
            <Link to='/caixa'><Button>Caixa</Button></Link>
            <Link to='/vendas'><Button>Vendas</Button></Link>
            <Link to='/estoque'><Button>Estoque</Button></Link>
            <Link to='/financeiro'><Button>Financeiro</Button></Link>
            <Link to='/sobre'><Button>Sobre</Button></Link>
          </Button.Group>
        </center>

        <Switch>
          <Route exact path='/' component={ Inicio } />
          <Route path='/produtos' component={ Produtos } />
          <Route path='/caixa' component={ Caixa } />
          <Route path='/vendas' component={ Vendas } />
          <Route path='/estoque' component={ Estoque } />
          <Route path='/financeiro' component={ Financeiro } />
          <Route path='/sobre' component={ Sobre } />
        </Switch>
      </div>
    );
  }
}

export default AppShell;