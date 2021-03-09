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
        <span style={{fontFamily:'Garamond'}}>MerceariaManager</span></h1>
        
        <Button.Group horizontal>
          <Link style={{textDecoration:'none'}} to='/'> <Button>Início</Button> </Link>
          <Link style={{textDecoration:'none'}} to='/produtos'><Button>Produtos</Button></Link>
          <Link style={{textDecoration:'none'}} to='/caixa'><Button>Caixa</Button></Link>
          <Link style={{textDecoration:'none'}} to='/vendas'><Button>Vendas</Button></Link>

          <Link style={{textDecoration:'none'}} to='/estoque'><Button>Estoque</Button></Link>
          <Link style={{textDecoration:'none'}} to='/financeiro'><Button>Financeiro</Button></Link>
          <Link style={{textDecoration:'none'}} to='/sobre'><Button>Sobre</Button></Link>
        </Button.Group>


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