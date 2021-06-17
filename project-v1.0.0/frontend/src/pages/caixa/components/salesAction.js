import React, {useState, useEffect} from "react";
import axios from 'axios';
import { MdMonetizationOn } from 'react-icons/md';
import { Button, Modal, Input, Label, Popup } from 'semantic-ui-react'

export default function FormDialog(props) {
    const [openSellPopup, setOpenSellPopup] = useState(false);
    const [productName] = useState(props.productName);
    const [availableQtd] = useState(props.availableQtd);
    const [resalePrice] = useState(props.resalePrice);
    const [typedProductQtd, setTypedProductQtd] = useState('');
    const [saleTotal, setSaleTotal] = useState(0);
    const [qtdError, setQtdError] = useState('');
    const [qtdInputError, setQtdInputError] = useState(false);
    const [sellingError, setSellingError] = useState('');

    const [totalSales, setTotalSales] = useState(0);
    const [balance, setBalance] = useState(0);


    useEffect(() => {    
        getFinancials();
    }, []);

    async function handleConfirmSellPopup(){
        setSellingError("");

        var newQuantity = props.availableQtd - parseInt(typedProductQtd, 10);

        if(typedProductQtd === '' || typedProductQtd === 0 || typedProductQtd < 0){
            setQtdError(<span style={{color:'red'}}>Preencha com a quantidade!</span>);
            setQtdInputError(true);
        } else if(typedProductQtd > availableQtd){
            setQtdError(<span style={{color:'red'}}>Não tem {productName} o suficiente no estoque!</span>);
        } else {

            const doc = {
                _id: props.id,
                kgQuantity: newQuantity,
            };

            await axios.post('http://localhost:9000/updateProduct', doc)
            .then((res) => {
                updateFinancials();
                setOpenSellPopup(false);
                window.location.reload();
            }).catch((err) => {
                setSellingError('Ocorreu um erro ao vender o produto!');
            })
        }
    }

    async function updateFinancials(){

        var newBalance = balance + saleTotal;
    
        const doc = {
          balance: newBalance,
          totalSales: totalSales + saleTotal,
        };
        
        await axios.post('http://localhost:9000/updateFinancials', doc)
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

    async function getFinancials(){
        fetch('http://localhost:9000/listFinancials').then(res => res.json().then(data =>({data: data}))
          .then((res) => {
            setBalance(res.data[0].balance);
            setTotalSales(res.data[0].totalSales);
          }));
    }

    return (
        <div>
            <Popup content={'Vender '+ props.productName} trigger={<button style={{border: 'none', background:'none'}}><MdMonetizationOn onClick={handleOpenSellPopup} style={{width:'145%', height:'145%', color:'green', cursor:"pointer"}}/></button>} />
            <Modal
                onClose={handleCloseSellPopup} 
                onOpen={handleOpenSellPopup} 
                open={openSellPopup}
                dimmer={"blurring"}
            >
                <Modal.Header>Vender {productName}</Modal.Header>
                <Modal.Content image>
                    <MdMonetizationOn style={{width:"200px", height:"200px", margin:'2%'}} wrapped />
                    <Modal.Description>
                        <p style={{fontSize:'15px'}}>
                        Preencha abaixo qual a quantidade de {productName} para a venda<br/><br/>
                        Quantidade disponível: <b>{availableQtd}kg</b>
                        </p><br/>
                        <Input value={typedProductQtd} onChange={e => handleProductQuantity(e.target.value)} error={qtdInputError} type="number" focus label="Quantidade" placeholder='kg'/><Label>x R${resalePrice}</Label>{/*<Popup content={'Valor de revenda'} trigger={<Label>x R${resalePrice}</Label>} />*/}
                        <br/>{qtdError}
                        <br/><br/>
                        <div class="ui divider"/>
                        <p>Valor da venda: <b>{saleTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</b></p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    {sellingError}
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