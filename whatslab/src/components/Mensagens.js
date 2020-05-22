import React from "react"
import styled from "styled-components"

const EuDiv = styled.div`
    margin: 3rem 3rem 0 3rem;
    display: flex;
    justify-content: flex-end;

    div {
        background: #DCF8C6 !important;
    }
`

class Mensagens extends React.Component {

    render() {

        const listaDeMensagens = this.props.mensagens.map((mensagem) => {
      
            if (mensagem.usuario === "Eu" || mensagem.usuario === "eu" || mensagem.usuario === "EU") {
                return (
                    <EuDiv key={mensagem.id}>
                        <div onClick={() => {this.props.removerMensagem(mensagem)}}>
                            <p>{mensagem.mensagem}</p>
                        </div>
                    </EuDiv>
                )
            } else if (mensagem.usuario === "") {
                return false
            } else {
                return (
                    <div key={mensagem.id}>
                        <div onClick={() => {this.props.removerMensagem(mensagem)}}>
                            <h2>{mensagem.usuario}</h2>
                            <p>{mensagem.mensagem}</p>
                        </div>
                    </div>
                )
            }
        });

        return (
            <section>
                {listaDeMensagens}
            </section>
        )
    }
}

export default Mensagens