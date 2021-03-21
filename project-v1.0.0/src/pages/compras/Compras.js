import './../../App.css';
import React, { useState } from 'react';
import PurchaseTable from './components/purchaseTable';
import Footer from './../footer/footer.js';
import { GrCart } from 'react-icons/gr';
import axios from 'axios';
import { Button,
  Header, Modal, Input, Icon, Popup, Container, Message } from 'semantic-ui-react'

function App() {
  const [openBuyPopup, setOpenBuyPopup] = useState(false);
  const [balance, setBalance] = useState(1200);
  const [typedProductName, setTypedProductName] = useState('');
  const [pQuantity, setPquantity] = useState('');
  const [resalePrice, setResalePrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [successfulClass, setSuccessfulClass] = useState("ui hidden message");
  const [passingLoadingTable] = useState(React.createRef());

  const [newProduct, setNewProduct] = useState('');

  {/*
    const [balance, setBalance] = useState(1200);
    const [quantity, setQuantity] = useState(0);
    const [productValue, setProductValue] = useState(0);
    const [disableBuyButton, setDisableBuyButton] = useState(false);
    const [buyPrice, setBuyPrice] = useState(0);
    const [afterBuyingBalance, setAfterBuyingBalance] = useState(balance);
    const [buyButtonPopup, setBuyButtonPopup] = useState('');
      setAfterBuyingBalance(balance - buyPrice);

      if(afterBuyingBalance > balance){
        setDisableBuyButton(true);
        setBuyButtonPopup("Você não tem saldo suficiente.");
      } else {
        setDisableBuyButton(false);
        setBuyButtonPopup("");
        setOpenBuyPopup(false);
        console.log("Compra efetuada!");
        window.location.reload();
      }

  */}

    async function insertNewProduct(){  
      const min = 1;
      const max = 900;

      var val1 = Math.floor(1000 + Math.random() * 9999);
      var val2 = Math.floor(100000 + Math.random() * 999999);
      var calculatesBarCode = "789."+val1+'.'+val2;

      console.log(calculatesBarCode)

      var kgPurchasePrice = purchasePrice
      var kgResalePrice = resalePrice
      var calculatedTotalPurchasePrice = (pQuantity * purchasePrice)

      const newProduct = {
        barCode: calculatesBarCode,
        productName: typedProductName,
        kgQuantity: pQuantity,
        kgPurchasePrice: purchasePrice,
        kgResalePrice: resalePrice,
        totalKgPurchasePrice: calculatedTotalPurchasePrice
      };
      
      console.log(newProduct);

      axios.post('http://localhost:9000/insertProduct', newProduct)
        .then(response => console.log(response.data))

      setOpenBuyPopup(false);
      setSuccessfulClass("ui message");
      updateTable();
    }

    function handleOpenBuyPopup(){
      setOpenBuyPopup(true);
    }

    function handleCloseBuyPopup(){
      setOpenBuyPopup(false);
    }

    const handleProductName = (e) => {
      console.log(e);
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

    function updateTable(){
      passingLoadingTable.current.loadData();
    }

  return (
    <div>
      <Container style={{backgroundColor: "white", width:"97%", padding:'3%'}}><br/>
        <div class={successfulClass}>
          <p>A compra foi efetuada com sucesso!</p>
        </div>
        <Header as='h2' icon style={{marginLeft:'37%'}}>
          <Icon name='cart' />
           Compras
          <Header.Subheader style={{fontSize:'14px'}}>
            Compre produtos para adicionar em seu Estoque sempre que precisar
          </Header.Subheader>
        </Header><br/>
          <center style={{marginLeft:'5%'}}><Popup content='Compre produtos pro Estoque' trigger={<Button style={{margin:'3%'}} onClick={handleOpenBuyPopup}>COMPRAR</Button>} /></center>
        <PurchaseTable ref={passingLoadingTable}/>
        <br/>
        <div>
          <Modal
            onClose={handleCloseBuyPopup} 
            onOpen={handleOpenBuyPopup} 
            open={openBuyPopup}
          >
            <Modal.Header>Comprar um produto</Modal.Header>
            <Modal.Content image>
              <GrCart style={{width:"250px", height:"250px"}} wrapped />
              <Modal.Description>
                {/*<Header>Default Profile Image</Header>*/}
                <p>
                  Preencha abaixo com as informações do produto à comprar para adicionar no estoque.
                </p>
                <Input focus label="Produto" value={typedProductName} onChange={e => handleProductName(e.target.value)} style={{margin:'2%'}}/>
                <Input focus label="Quantidade" value={pQuantity} onChange={e => handleProductQuantity(e.target.value)} placeholder='(kg)'/><br/>
                <Input focus label="Valor de Compra" value={purchasePrice}  onChange={e => handlePurchasePrice(e.target.value)} placeholder='(R$/kg)' style={{margin:'2%'}}/>
                <Input focus label="Valor de Revenda" value={resalePrice} onChange={e => handleResalePrice(e.target.value)} placeholder='(R$/kg)'/><br/><br/>
                <p>Saldo: R${balance}</p>
                <p>Valor dessa compra: R${pQuantity * purchasePrice}</p>
                <p>Saldo após a compra: R${balance - (pQuantity * purchasePrice)}</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
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
        </div>
      </Container>
      <center style={{margin:'6.4%'}}><Footer/></center>
    </div>
  );
}

export default App;
