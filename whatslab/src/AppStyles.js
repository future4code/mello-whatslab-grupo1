import styled from "styled-components"

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    background: #E5DDD5;
    margin: 0 auto;
    border: 1px solid black;

    section {
        flex: 1;
        display: flex;
        flex-direction: column-reverse;
        padding-bottom: 3rem;

        > div {
            margin: 3rem 3rem 0 3rem;
            display: flex;

            > div {
                font-size: 1.6rem;
                border-radius: 5px;
                background: white;
                display: inline-block;
                padding: 1.3rem;
                cursor: pointer;

                h2 {
                    margin-bottom: 1.3rem;
                }
            }
    }
}`

const Formulario = styled.form`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.1rem .8rem;
    width: 100%;
    max-height: 6rem;
    > * {
        background: white;
        font-size: 1.6rem;
        width: 100%;
        height: 100%;
        margin: .5rem;
        border-radius: 5px;
        border: none;
    }

    > input:nth-child(1) {
        flex: 18;
        padding-left: .7rem;
    }

    > input:nth-child(2) {
        flex: 69;
        padding-left: .7rem;
    }

    > button {
        background: #F0F0F0;
        flex: 13;
        font-weight: bold;
        cursor: pointer;
    }
`

export {Main, Formulario}