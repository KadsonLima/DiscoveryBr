import styled from "styled-components";
import { useState } from "react";

export const VagasDestaques = () => {



    return (
        <Container>
            <img src="https://veja.abril.com.br/wp-content/uploads/2016/05/logo-da-amazon-original1.jpeg" alt="empresa" />
            <Description>
                <h3>Programador Catalyst</h3>
                <p>Vaga para Desenvolvedor WEb para atuar em seu departamento de Criação e Desenvolvimento</p>
                <button>Ver Vaga</button>
            </Description>
        </Container>

    )

}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;

    img{
        width: 50%;
    }
`

const Description = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    p{
        font-size: small;
        height: 30px;
        text-overflow: ellipsis;
    }
`