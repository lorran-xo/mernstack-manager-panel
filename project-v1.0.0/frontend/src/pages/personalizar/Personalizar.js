import './../../App.css';
import React from 'react';
import Footer from './../footer/footer.js';
import LorranPic from './../../images/lorranxo.jpg';
import { Button, Card, Header, Icon, Image, Container } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload';

function App() {
  const [pictures, setPictures] = React.useState([]);

  function onDrop(picture){
    setPictures(picture);
  }

  return (
    <div>
      {/*<header className="App-header">
      </header>*/}
      <Container style={{backgroundColor: "white", width:"90%", padding:'5%'}}><br/>
        <Header as='h2' icon style={{marginLeft:'40%'}}>
          <Icon name='info circle' />
           Personalizar
          <Header.Subheader style={{fontSize:'15px'}}>
            Personalize o seu painel de acordo com o seu negócio!
          </Header.Subheader><br/>
        </Header>
        <ImageUploader
          withIcon={true}
          buttonText='Selecione a imagem'
          onChange={onDrop}
          imgExtension={['.jpg', '.png']}
          label={"Tamanho máximo: 5mb - Formatos: .jpg e .png"}
          maxFileSize={5242880}
        />
      </Container>
      <center style={{marginTop:'-3%'}}><Footer/></center>
    </div>
  );
}

export default App;