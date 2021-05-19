import './../../App.css';
import React from 'react';
import Footer from './../footer/footer.js';
import { Header, Icon, Container } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload';

function App() {
  const [pictures, setPictures] = React.useState([]);

  function onDrop(picture){
    setPictures(picture);
    console.log(pictures);
  }

  return (
    <React.Fragment>
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
        <form action="http://localhost:9000/uploadImage" method="POST" enctype="multipart/form-data">
          <div class="form-group">
            <label for="image" class="text-white">Upload image</label>
            <input type="file" name="image" id="image" class="form-control-file text-white"/>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>

        {/*<ImageUploader
          withIcon={true}
          buttonText='Selecione a imagem'
          onChange={onDrop}
          imgExtension={['.jpg', '.png']}
          label={"Tamanho máximo: 5mb - Formatos: .jpg e .png"}
          maxFileSize={5242880}
        />*/}
      </Container>
      <center style={{marginTop:'-3%'}}><Footer/></center>
    </React.Fragment>
  );
}

export default App;