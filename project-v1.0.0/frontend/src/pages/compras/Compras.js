import './../../App.css';
import React, { useState, useEffect } from 'react';
import PurchaseTable from './components/purchaseTable';
import Footer from './../footer/footer.js';
import axios from 'axios';
import { Button,
  Header, Modal, Input, Icon, Popup, Container, Grid } from 'semantic-ui-react'

function App() {
  const [openBuyPopup, setOpenBuyPopup] = useState(false);
  const [typedProductName, setTypedProductName] = useState('');
  const [pQuantity, setPquantity] = useState('');
  const [resalePrice, setResalePrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [successfulClass, setSuccessfulClass] = useState("ui hidden message");
  const [buyingError, setBuyingError] = useState('');
  const [passingLoadingTable] = useState(React.createRef());
  const [nameError, setNameError] = useState('');
  const [qtdError, setQtdError] = useState('');
  const [purchasePriceError, setPurchasePriceError] = useState('');
  const [resalePriceError, setResalePriceError] = useState('');
  const [nameInputError, setNameInputError] = useState(false);
  const [qtdInputError, setQtdInputError] = useState(false);
  const [purchasePriceInputError, setPurchasePriceInputError] = useState(false);
  const [resalePriceInputError, setResalePriceInputError] = useState(false);

  const [qtProducts, setQtProducts] = useState(0);
  const [totalPurchases, setTotalPurchases] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {  
    getFinancials();
  },[]);

  async function insertNewProduct(){
    let repeatedProduct = false;

    await fetch('http://localhost:9000/listStock').then(res => res.json().then(data =>({data: data})) //Ve se já tem no banco o produto que está sendo adicionado pra nao duplicar
      .then((res) => {
        for (let i = 0; i < res.data.length; i += 1) {
          if(typedProductName === res.data[i].productName){
            repeatedProduct = true;
          }
        }
      }).catch((err) => {
      }));

    setBuyingError('');
    setNameError('');
    setQtdError('');
    setPurchasePriceError('');
    setResalePriceError('');
    setNameInputError(false);
    setQtdInputError(false);
    setPurchasePriceInputError(false);
    setResalePriceInputError(false);

    var val1 = Math.floor(1000 + Math.random() * 9999);
    var val2 = Math.floor(100000 + Math.random() * 999999);
    var calculatesBarCode = "789."+val1+'.'+val2;
    var calculatedTotalPurchasePrice = (pQuantity * purchasePrice)

    if(typedProductName === '' || typedProductName.length <= 2){
      setNameError(<span style={{color:'red'}}>Preencha o nome do produto!</span>);
      setNameInputError(true);
    } else if (pQuantity === '' || pQuantity === 0 || pQuantity < 0){
      setQtdError(<span style={{color:'red'}}>Preencha a quantidade do produto!</span>);
      setQtdInputError(true);
    }else if(purchasePrice === '' || purchasePrice === 0 || purchasePrice < 0){
      setPurchasePriceError(<span style={{color:'red'}}>Preencha o preço do produto!</span>);
      setPurchasePriceInputError(true);
    } else if(resalePrice === '' || resalePrice === 0 || resalePrice < 0){
      setResalePriceError(<span style={{color:'red'}}>Preencha o preço de revenda do produto!</span>);
      setResalePriceInputError(true);
    } else if(balance < (balance - (pQuantity * purchasePrice))){ //saldo menor que o valor da compra
      setBuyingError(<span style={{color:'red'}}>Você não tem saldo suficiente!</span>);
    } else if(repeatedProduct === true){
      setBuyingError(<span style={{color:'red'}}>Já existe um produto com esse nome no estoque, compre dele diretamente da tabela!</span>);
    } else {
      const newProduct = {
        barCode: calculatesBarCode,
        productName: typedProductName,
        kgQuantity: pQuantity,
        kgPurchasePrice: purchasePrice,
        kgResalePrice: resalePrice,
        totalKgPurchasePrice: calculatedTotalPurchasePrice
      };
    
      await axios.post('http://localhost:9000/insertProduct', newProduct)
        .then((response) => {
          updateFinancials();
          setOpenBuyPopup(false);
          setSuccessfulClass("ui message");
          //updateTable();
        }).catch((err) => {
          setBuyingError(<span style={{color:'red'}}>Ocorreu um erro ao efetuar a compra!</span>);
        })
    }
  }

  async function getFinancials(){
    fetch('http://localhost:9000/listFinancials').then(res => res.json().then(data =>({data: data}))
      .then((res) => {
        setBalance(res.data[0].balance);
        setQtProducts(res.data[0].qtProducts);
        setTotalPurchases(res.data[0].totalPurchases);
      }).catch((err) => {
        console.log(err);
      }));
  }

  async function updateFinancials(){
    var purchaseValue = pQuantity * purchasePrice;

    const doc = {
      balance: balance - purchaseValue,
      totalPurchases: totalPurchases + purchaseValue,
      qtProducts: qtProducts + 1,
    };

    await axios.post('http://localhost:9000/updateFinancials', doc)
    .then((res) => {
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleOpenBuyPopup(){
    setTypedProductName('');
    setPquantity('');
    setPurchasePrice('');
    setResalePrice('');
    setBuyingError('');
    setNameError('');
    setQtdError('');
    setPurchasePriceError('');
    setResalePriceError('');
    setNameInputError(false);
    setQtdInputError(false);
    setPurchasePriceInputError(false);
    setResalePriceInputError(false);
    setOpenBuyPopup(true);
  }

  function handleCloseBuyPopup(){
    setOpenBuyPopup(false);
  }

  const handleProductName = (e) => {
    setTypedProductName(e);
  }

  const handleProductQuantity = (e) => {
    setPquantity(e);
  }

  const handlePurchasePrice = (e) => {
    setPurchasePrice(e);
  }

  const handleResalePrice = (e) => {
    setResalePrice(e);
  }

  /*function updateTable(){
    passingLoadingTable.current.loadData();
    window.location.reload();
  }*/

  return (
    <>
      <Container className="geral"><br/>
        <div class={successfulClass}>
          <p>A compra foi efetuada com sucesso!</p>
        </div>
        <Header as='h2' icon style={{marginLeft:'38%'}}>
          <Icon name='cart' />
           Compras
          <Header.Subheader style={{fontSize:'15px'}}>
            Compre produtos para adicionar em seu Estoque sempre que precisar
          </Header.Subheader>
          <center><Popup content='Compre produtos pro Estoque' trigger={<Button style={{margin:'5%'}} onClick={handleOpenBuyPopup}>COMPRAR</Button>} /></center>
        </Header>
        <PurchaseTable ref={passingLoadingTable}/>
          <Modal
            onClose={handleCloseBuyPopup} 
            onOpen={handleOpenBuyPopup} 
            open={openBuyPopup}
            dimmer={"blurring"}
          >
            <Modal.Header>Comprar um produto</Modal.Header>
            <Modal.Content image>
              <Modal.Description style={{margin:'3%'}}>
                <p style={{fontSize:'15px'}}>
                  Preencha abaixo com as informações do produto à comprar para adicionar no estoque
                </p>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Input focus error={nameInputError} label="Produto" type="text" value={typedProductName.replace(/:| {2}|;|,|<|>|1|2|3|4|5|6|7|8|9|0|/g, '')} onChange={e => handleProductName(e.target.value)} style={{margin:'3%'}}/>
                      <br/>{nameError}<br/>
                      <Input focus error={qtdInputError} label="Quantidade" type="number" value={pQuantity} onChange={e => handleProductQuantity(e.target.value)} placeholder='(kg)'/><br/>
                      <br/>{qtdError}
                    </Grid.Column>
                    <Grid.Column>
                      <Input focus error={purchasePriceInputError} label="Valor de Compra" type="number" value={purchasePrice} onChange={e => handlePurchasePrice(e.target.value)} placeholder='(R$/kg)' style={{margin:'3%'}}/>
                      <br/>{purchasePriceError}<br/>
                      <Input focus error={resalePriceInputError} label="Valor de Revenda" type="number" value={resalePrice} onChange={e => handleResalePrice(e.target.value)} placeholder='(R$/kg)'/><br/><br/>
                      {resalePriceError}
                    </Grid.Column>
                  </Grid.Row>
                </Grid><br/>
                <div class="ui divider"/>
                <p>Saldo: R${balance}</p>
                <p>Valor dessa compra: <b>R${pQuantity * purchasePrice}</b></p>
                <p>Saldo após a compra: R${balance - (pQuantity * purchasePrice)}</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              {buyingError}
              <Button
                content='Cancelar'
                negative
                onClick={handleCloseBuyPopup}
              />
              <Button
                content='Comprar'
                icon='checkmark'
                labelPosition='right'
                positive
                onClick={insertNewProduct}
              />
            </Modal.Actions>
          </Modal>
      </Container>
      <center><Footer/></center>
    </>
  );
}

export default App;
