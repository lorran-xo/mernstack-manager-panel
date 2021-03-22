import React, {useState, useEffect} from "react";
import { Divider } from 'semantic-ui-react'
import { MdMonetizationOn } from 'react-icons/md';
import { Button, Modal, Input, Label, Popup } from 'semantic-ui-react'

export default function FormDialog(props) {
    const [openSellPopup, setOpenSellPopup] = useState(false);
    const [productName, setProductName] = useState(props.productName);
    const [availableQtd, setAvailableQtd] = useState(props.availableQtd);
    const [resalePrice, setResalePrice] = useState(props.resalePrice);
    const [typedProductQtd, setTypedProductQtd] = useState('');
    const [saleTotal, setSaleTotal] = useState(0);
    const [qtdError, setQtdError] = useState('');
    const [qtdInputError, setQtdInputError] = useState(false);

    useEffect(() => {                
    }, []);

    async function handleConfirmSellPopup(){  

        if(typedProductQtd == '' || typedProductQtd == 0 || typedProductQtd < 0){
            setQtdError(<span style={{color:'red'}}>Preencha com a quantidade!</span>);
            setQtdInputError(true);
        } else if(typedProductQtd > availableQtd){
            setQtdError(<span style={{color:'red'}}>Não tem {productName} o suficiente no estoque!</span>);
        } else {
            setOpenSellPopup(false);
            window.location.reload();
            /*await api.post('/')
            .then((res) => {
                setOpenSellPopup(false);
                window.location.reload();
            }).catch((err) => {
    
            })*/ 
        }
    }

    function handleOpenSellPopup(){
        setTypedProductQtd("");
        setQtdError("");
        setSaleTotal(0);
        setQtdInputError(false);
        setOpenSellPopup(true);
    }

    function handleCloseSellPopup(){
      setOpenSellPopup(false);
    }

    const handleProductQuantity = (e) => {
        setTypedProductQtd(e);

        let total = e * resalePrice;
        setSaleTotal(total);
    }
  
    return (
        <div>
            <Popup content={'Vender '+ props.productName} trigger={<button style={{border: 'none', background:'none'}}><MdMonetizationOn onClick={handleOpenSellPopup} style={{width:'145%', height:'145%', color:'green', cursor:"pointer"}}/></button>} />
            <Modal
                onClose={handleCloseSellPopup} 
                onOpen={handleOpenSellPopup} 
                open={openSellPopup}
            >
                <Modal.Header>Vender {productName}</Modal.Header>
                <Modal.Content image>
                    <MdMonetizationOn style={{width:"200px", height:"200px", margin:'2%'}} wrapped />
                    <Modal.Description>
                        <p style={{fontSize:'15px'}}>
                        Preencha abaixo qual a quantidade de {productName} para a venda<br/><br/>
                        Quantidade disponível: <b>{availableQtd}kg</b>
                        </p><br/>
                        <Input value={typedProductQtd} onChange={e => handleProductQuantity(e.target.value)} error={qtdInputError} type="number" focus label="Quantidade" placeholder='kg'/><Popup content={'Valor de revenda'} trigger={<Label>x R${resalePrice}</Label>} />
                        <br/>{qtdError}
                        <br/><br/>
                        <div class="ui divider"/>
                        <p>Valor da venda: <b>R${saleTotal}</b></p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        content='Cancelar'
                        negative
                        onClick={handleCloseSellPopup}
                    />
                    <Button
                        content='Vender'
                        icon='checkmark'
                        labelPosition='right'
                        positive
                        onClick={handleConfirmSellPopup}
                    />
                </Modal.Actions>
            </Modal>
        </div>
    );
}