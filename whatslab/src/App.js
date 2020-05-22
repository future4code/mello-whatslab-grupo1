import React from "react";
import "./App.css"
import { Main, Formulario } from "./AppStyles";

import Mensagens from "./components/Mensagens"

class App extends React.Component {

  state = {
    mensagensEnviadas: [
    {
    id: 0,
    usuario: "",
    mensagem: ""
    } 
  ],
    valorInputUsuario: "",
    valorInputMensagem: "",
    contador: 1,
    intervaloClick: []
  };

  onChangeInputUsuario = (event) => {
    this.setState ({valorInputUsuario: event.target.value})
  }

  onChangeInputMensagem = (event) => {
    this.setState ({valorInputMensagem: event.target.value})
  }

  onClickMandaMensagem = (event) => {
    event.preventDefault()
    if (this.state.valorInputUsuario !== "" && this.state.valorInputMensagem !== "") {
      const novaMensagem = {
        id: this.state.contador,
        usuario: this.state.valorInputUsuario,
        mensagem: this.state.valorInputMensagem
      }
      let novoContador = this.state.contador
      novoContador++
  
      const novasMensagens = [novaMensagem, ...this.state.mensagensEnviadas];
      this.setState ({
        mensagensEnviadas: novasMensagens,
        valorInputMensagem: "",
        contador: novoContador
      })
    } else {
      alert("Informe os campos Usuário e Mensagem")
    }
    
  }
      
  onKeyDownEnter = (event) => {
    if (event.key === "Enter") {
      this.onClickMandaMensagem(event)
    }
  }

  onDoubleClickMensagem = (mensagemAlvo) => {

    const doubleClick = () => {
      const novasMensagens = this.state.mensagensEnviadas.filter((mensagem) => {
        return mensagem.id !== mensagemAlvo.id
      })
      this.setState ({
        mensagensEnviadas: novasMensagens,
      })
    }

    let clicks = [...this.state.intervaloClick], timeout

    clicks.push(new Date().getTime());

    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
        if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
            if (window.confirm("Tem certeza que quer deletar essa mensagem?")) {
              doubleClick()
            }
        }
    }, 250);

    this.setState({
      intervaloClick: clicks
    })
  }

  render() {

    return (

      <Main>

        <Mensagens
          mensagens={this.state.mensagensEnviadas}
          removerMensagem={this.onDoubleClickMensagem}
        /> 
        
        <Formulario>
              
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
        </Formulario> 
       
     </Main>   
    );
  }
}

export default App;
