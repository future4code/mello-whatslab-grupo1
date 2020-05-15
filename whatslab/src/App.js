import React from "react";
import "./styles.css";

class App extends React.Component {

state = {
  mensagensEnviadas: [
  {
  usuario: "",
  mensagem: ""
  } 
], 
  valorInputUsuario: "",
  valorInputMensagem: ""
};

onChangeInputUsuario = (event) => {
  this.setState ({valorInputUsuario: event.target.value})
}

onChangeInputMensagem = (event) => {
  this.setState ({valorInputMensagem: event.target.value})
}

onClickMandaMensagem = () => {
  const novaMensagem = {
    mensagem: this.state.valorInputMensagem,
    usuario: this.state.valorInputUsuario
  }
  const novasMensagens = [...this.state.mensagensEnviadas, novaMensagem];
  this.setState ({
    mensagensEnviadas: novasMensagens,
    valorInputMensagem: ""
  })
}
    
onKeyDownEnter = (event) => {
  if (event.key === "Enter") {
    this.onClickMandaMensagem()
  }
}


  render() {

    const listaDeMensagens = this.state.mensagensEnviadas.map((mensagem) => {
      
        return (
        <div>
          <span>
            <strong>{mensagem.usuario}</strong>: {mensagem.mensagem} 
          </span> 
        </div>
        )
    });
        

    return (

      <div id="App">

        <div className="containerDeMensagem"> 
          {listaDeMensagens}
        </div>
        
        <div className="containerDeInput">
              
            <input placeholder={"Usuário"} 
            value={this.state.valorInputUsuario} 
            onChange={this.onChangeInputUsuario}
            />

            <input placeholder={"Mensagem"} 
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            onKeyDown={this.onKeyDownEnter} 
            />

            <button onClick={this.onClickMandaMensagem}
            >              
            Enviar 
            </button>
       </div> 
       
     </div>   
    );
  }
}

export default App;
