import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//abas
import Inicio  from './pages/inicio/Inicio';
import Compras from './pages/compras/Compras';
import Caixa from './pages/caixa/Caixa';
import Estoque from './pages/estoque/Estoque';
import Personalizar from './pages/personalizar/Personalizar';
import Sobre from './pages/sobre/Sobre';
//SemanticUI
import { Button, Grid, Icon, Label } from 'semantic-ui-react'
//icons
import GreenShopLogo from './images/Green-Shop-Logo.png';

class AppShell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
    }
  }
  componentDidMount() {
    this.getPanelBalance();
  }

  getPanelBalance = async () => {
    fetch('http://localhost:9000/listFinancials').then(res => res.json().then(data =>({data: data}))
      .then((res) => {
        this.setState({
          balance: res.data[0].balance,
        });
      }).catch((err) => {
        console.log("catch");
      }));
  };

  render() {
    return (  //F3F3F3, DCE1E3, FDF8F5, a2c3a3, b2cdb2
      <div style={{backgroundColor:'#b2cdb2', paddingTop:'0.5%'}}>
        <Grid columns={4}> {/*toDo:Analisar GRID*/}
          <Grid.Row>
            <Grid.Column style={{margin:'1%'}}>
              <img src={GreenShopLogo} alt="Green-Shop-Logo"/>
            </Grid.Column>
            <Grid.Column>
              <Button.Group horizontal style={{margin:"10%"}}>
                <Link to='/'><Button labelPosition='right' icon>Início<Icon name='home'/></Button></Link>
                <Link to='/estoque'><Button labelPosition='right' icon>Estoque<Icon name='dolly flatbed'/></Button></Link>
                <Link to='/caixa'><Button labelPosition='right' icon>Caixa<Icon name='archive'/></Button></Link>
                <Link to='/compras'><Button labelPosition='right' icon>Compras<Icon name='cart'/></Button></Link>
                <Link to='/personalizar'><Button labelPosition='right' icon>Personalizar<Icon name='paint brush'/></Button></Link>
                <Link to='/sobre'><Button labelPosition='right' icon>Sobre<Icon name='info circle'/></Button></Link>
                <Label>
                  Saldo
                  <Label.Detail>R${this.state.balance}</Label.Detail>
                </Label>
              </Button.Group>
              {/*<center style={{margin:'1%'}}><Header style={{fontSize:'14px'}}>Saldo: R$ 1200 </Header></center>*/}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Switch>
          <Route exact path='/' component={ Inicio } />
          <Route path='/compras' component={ Compras } />
          <Route path='/caixa' component={ Caixa } />
          <Route path='/estoque' component={ Estoque } />
          <Route path='/personalizar' component={ Personalizar } />
          <Route path='/sobre' component={ Sobre } />
        </Switch>
      </div>
    );
  }
}

export default AppShell;