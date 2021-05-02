import React, {useState, useEffect} from "react";
import axios from 'axios';
import { FaCartArrowDown } from 'react-icons/fa';
import { Button, Modal, Input, Label, Popup } from 'semantic-ui-react'

export default function FormDialog(props) {
    const [openBuyPopup, setOpenBuyPopup] = useState(false);
    const [productName] = useState(props.productName);
    const [availableQtd] = useState(props.availableQtd);
    const [purchasePrice] = useState(props.purchasePrice);
    const [typedProductQtd, setTypedProductQtd] = useState('');
    const [purchaseTotal, setPurchaseTotal] = useState(0);
    const [qtdError, setQtdError] = useState('');
    const [buyingError, setBuyingError] = useState('');
    const [qtdInputError, setQtdInputError] = useState(false);

    const [totalPurchases, setTotalPurchases] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {    
        getFinancials();
    }, []);

    async function handleConfirmBuyPopup(){  
        setBuyingError("");
        var newQuantity = props.availableQtd + parseInt(typedProductQtd, 10);
        console.log(newQuantity);

        if(typedProductQtd === '' || typedProductQtd === 0 || typedProductQtd < 0){
            setQtdError(<span style={{color:'red'}}>Preencha com a quantidade!</span>);
            setQtdInputError(true);
        } else if(balance < (balance - (typedProductQtd * purchasePrice))){
            setBuyingError(<span style={{color:'red'}}>Você não tem saldo suficiente!</span>);
        } else {
            
            const doc = {
                _id: props.id,
                kgQuantity: newQuantity,
            };

            await axios.post('http://localhost:9000/updateProduct', doc)
            .then((res) => {
                updateFinancials();
                setOpenBuyPopup(false);
                window.location.reload();
            }).catch((err) => {
                setBuyingError('Ocorreu um erro ao editar o produto!');
            })
        }
    }

    async function updateFinancials(){

        var newBalance = balance - (typedProductQtd * purchasePrice);
    
        const doc = {
          balance: newBalance,
          totalPurchases: totalPurchases + purchaseTotal,
        };
    
        console.log(doc);
    
        await axios.post('http://localhost:9000/updateFinancials', doc)
        .then((res) => {
          console.log("ok");
          console.log(res);
          window.location.reload();
        }).catch((err) => {
          console.log("catch");
        })
    }

    function handleOpenBuyPopup(){
        setTypedProductQtd("");
        setQtdError("");
        setQtdInputError(false);
        setBuyingError("");
        setPurchaseTotal(0);
        setOpenBuyPopup(true);
    }

    function handleCloseBuyPopup(){
      setOpenBuyPopup(false);
    }

    const handleProductQuantity = (e) => {
        setTypedProductQtd(e);

        let total = e * purchasePrice;
        setPurchaseTotal(total);
    }

    async function getFinancials(){
        fetch('http://localhost:9000/listFinancials').then(res => res.json().then(data =>({data: data}))
          .then((res) => {
            console.log(res.data);
            setBalance(res.data[0].balance);
            setTotalPurchases(res.data[0].totalPurchases);
          }).catch((err) => {
            console.log("catch");
          }));
      }
  
    return (
        <div>
            <Popup content={'Comprar mais '+ props.productName} trigger={<button style={{border: 'none', background:'none'}}><FaCartArrowDown onClick={handleOpenBuyPopup} style={{width:'145%', height:'145%', color:props.cartColor, cursor:"pointer"}}/></button>} />
            <Modal
                onClose={handleCloseBuyPopup} 
                onOpen={handleOpenBuyPopup} 
                open={openBuyPopup}
                dimmer={"blurring"}
            >
                <Modal.Header>Comprar {productName}</Modal.Header>
                <Modal.Content image>
                    <FaCartArrowDown style={{width:"200px", height:"200px", margin:'2%'}} wrapped />
                    <Modal.Description>
                        <p style={{fontSize:'15px'}}>
                        Preencha abaixo qual a quantidade de {productName} precisa comprar<br/><br/>
                        Quantidade atual: <b>{availableQtd}kg</b>
                        </p><br/>
                        <Input value={typedProductQtd} onChange={e => handleProductQuantity(e.target.value)} error={qtdInputError} type="number" focus label="Quantidade" placeholder='kg'/><Label>x R${purchasePrice}</Label>{/*<Popup content={'Valor de compra'} trigger={<Label>x R${purchasePrice}</Label>} />*/}
                        <br/>{qtdError}
                        <br/><br/>
                        <div class="ui divider"/>
                        <p>Valor da compra: <b>R${purchaseTotal}</b></p>
                        <p>Saldo após a compra: R${balance - (typedProductQtd * purchasePrice)}</p>
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
                        onClick={handleConfirmBuyPopup}
                    />
                </Modal.Actions>
            </Modal>
        </div>
    );
}