import React, {useState, useEffect} from "react";
import { FaCartArrowDown } from 'react-icons/fa';
import { Button, Modal, Input, Label, Popup } from 'semantic-ui-react'

export default function FormDialog(props) {
    const [balance] = useState(1200);
    const [openBuyPopup, setOpenBuyPopup] = useState(false);
    const [productName] = useState(props.productName);
    const [availableQtd] = useState(props.availableQtd);
    const [purchasePrice] = useState(props.purchasePrice);
    const [typedProductQtd, setTypedProductQtd] = useState('');
    const [purchaseTotal, setPurchaseTotal] = useState(0);
    const [qtdError, setQtdError] = useState('');
    const [buyingError, setBuyingError] = useState('');
    const [qtdInputError, setQtdInputError] = useState(false);

    useEffect(() => {                
    }, []);

    async function handleConfirmBuyPopup(){  
        setBuyingError("");

        if(typedProductQtd === '' || typedProductQtd === 0 || typedProductQtd < 0){
            setQtdError(<span style={{color:'red'}}>Preencha com a quantidade!</span>);
            setQtdInputError(true);
        } else if(balance < (balance - (typedProductQtd * purchasePrice))){
            setBuyingError(<span style={{color:'red'}}>Você não tem saldo suficiente!</span>);
        } else {
            setOpenBuyPopup(false);
            window.location.reload();
            /*await api.post('/')
            .then((res) => {
                setOpenSellPopup(false);
                window.location.reload();
            }).catch((err) => {
    
            })*/ 
        }
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
                        <Input value={typedProductQtd} onChange={e => handleProductQuantity(e.target.value)} error={qtdInputError} type="number" focus label="Quantidade" placeholder='kg'/><Popup content={'Valor de compra'} trigger={<Label>x R${purchasePrice}</Label>} />
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