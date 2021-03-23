import React, {useState, useEffect} from "react";
import { FiEdit } from 'react-icons/fi';
import { Button, Modal, Input, Popup, Grid } from 'semantic-ui-react'

export default function FormDialog(props) {
    const [openEditPopup, setOpenEditPopup] = useState(false);
    const [openDeleteProductConfirm, setOpenDeleteProductConfirm] = useState(false);
    const [purchasePrice, setPurchasePrice] = useState(props.purchasePrice);
    const [resalePrice, setResalePrice] = useState(props.resalePrice);
    const [purchasePriceError, setPurchasePriceError] = useState('');
    const [purchasePriceInputError, setPurchasePriceInputError] = useState(false);
    const [resalePriceError, setResalePriceError] = useState('');
    const [resalePriceInputError, setResalePriceInputError] = useState(false);
    const [editingError, setEditingError] = useState('');

    useEffect(() => {           
    }, []);

    async function handleConfirmEditPopup(){
        setPurchasePriceError('');
        setPurchasePriceInputError(false);
        setResalePriceError('');
        setResalePriceInputError(false);
        setEditingError('');

        if(purchasePrice === '' || purchasePrice === 0 || purchasePrice < 0){
            setPurchasePriceError(<span style={{color:'red'}}>Preencha com o preço de compra!</span>);
            setPurchasePriceInputError(true);
        } else if(resalePrice === '' || resalePrice === 0 || resalePrice < 0){ 
            setResalePriceError(<span style={{color:'red'}}>Preencha com o preço de revenda!</span>);
            setResalePriceInputError(true);
        } else {
            setOpenEditPopup(false);
            window.location.reload();
            /*await api.post('/')
            .then((res) => {
                setOpenEditPopup(false);
                window.location.reload();
            }).catch((err) => {
                setEditingError('Ocorreu um erro ao editar o produto!');
            })*/ 
        }
    }

    function handleOpenDeleteProductConfirm(){
        setOpenDeleteProductConfirm(true);
    }

    function handleCloseDeleteProductConfirm(){
        setOpenDeleteProductConfirm(false);
    }

    async function handleDeleteProduct(){
        setOpenDeleteProductConfirm(false);
        setOpenEditPopup(false);
        window.location.reload();
        /*await api.post('/')
        .then((res) => {
            setOpenEditPopup(false);
            window.location.reload();
        }).catch((err) => {

        })*/ 
    }
    
    function handleOpenEditPopup(){
        setPurchasePriceError('');
        setPurchasePriceInputError(false);
        setResalePriceError('');
        setResalePriceInputError(false);
        setEditingError('');
        setOpenEditPopup(true);
    }

    function handleCloseEditPopup(){
        setOpenEditPopup(false);
    }

    const handlePurchasePrice = (e) => {
        setPurchasePrice(e);
    }
  
    const handleResalePrice = (e) => {
        setResalePrice(e);
    }

    return (
        <div>
            <Popup content={'Editar '+ props.productName} trigger={<button style={{border: 'none', background:'none'}}><FiEdit onClick={handleOpenEditPopup} style={{width:'145%', height:'145%', cursor:"pointer"}}/></button>} />            
            <Modal
                onClose={handleCloseEditPopup} 
                onOpen={handleOpenEditPopup} 
                open={openEditPopup}
                dimmer={"blurring"}
            >
                <Modal.Header>Editar {props.productName}</Modal.Header>
                <Modal.Content image>
                    <FiEdit style={{width:"200px", height:"200px", margin:'2%'}} wrapped />
                    <Modal.Description>
                        <p style={{fontSize:'15px'}}>
                        Visualize os dados atuais de {props.productName} para editar ou excluir quando necessário.<br/><br/>
                        </p><br/>
                        <Grid columns={3}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input focus error={purchasePriceInputError} label="Valor de Compra" type="number" value={purchasePrice}  onChange={e => handlePurchasePrice(e.target.value)} placeholder='(R$/kg)' style={{margin:'3%'}}/>
                                    <br/>{purchasePriceError}<br/>
                                    <Input focus error={resalePriceInputError} label="Valor de Revenda" type="number" value={resalePrice} onChange={e => handleResalePrice(e.target.value)} placeholder='(R$/kg)'/><br/><br/>
                                    {resalePriceError}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid><br/>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    {editingError}
                    <Button
                        content='EXCLUIR'
                        negative
                        onClick={handleOpenDeleteProductConfirm}
                    />
                    <Button
                        content='Cancelar'
                        negative
                        onClick={handleCloseEditPopup}
                    />
                    <Button
                        content='Editar'
                        icon='checkmark'
                        labelPosition='right'
                        positive
                        onClick={handleConfirmEditPopup}
                    />
                </Modal.Actions>
            </Modal>
            {/*Delete product Modal*/}
            <Modal
                size="mini"
                open={openDeleteProductConfirm}
                onOpen={handleOpenDeleteProductConfirm} 
                onClose={handleCloseDeleteProductConfirm}
                dimmer={"blurring"}
            >
                <Modal.Header>Excluir Produto</Modal.Header>
                <Modal.Content>
                <p>Tem certeza que deseja excluir o produto '{props.productName}'?</p>
                </Modal.Content>
                <Modal.Actions>
                <Button negative onClick={handleCloseDeleteProductConfirm}>
                    Não
                </Button>
                <Button positive onClick={handleDeleteProduct}>
                    Sim
                </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
}