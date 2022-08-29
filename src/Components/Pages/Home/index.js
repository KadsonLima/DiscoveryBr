import { useEffect, useState } from "react";
import styled from "styled-components";
import { getVagas } from "../../../Services/api";
import { VagasDestaques } from "./VagasDestaques";



export const Home = () =>{
    const [vagas, setVagas] = useState({});

    useEffect(() => {
        getVagas().then((e)=>{
            setVagas(e.data);
        })
    
      
    }, [])
    
    

    // const listaVagas = (vagas&& vagas.length > 1)?vagas.map((e,index)=>{
    //     return(
    //         <Vaga key={index}>{e.nome} em {e.empresa} - {e.data}</Vaga>
    //     )
    // }):''

    return ( 
    <Container>
        <Title>Vagas em Destaque</Title>
        <Emphasis><VagasDestaques/></Emphasis>
        <Title>Vagas Recentes</Title>
    
    </Container>
    )
    
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 20px;
    flex-direction: column;
`

const Title = styled.div`
    width: 100%;
    display: flex;
    color: #444444;
    font-weight: bold;
    border-bottom: 2px solid #dddddd;
    margin-bottom: 10px;
`

const Emphasis = styled.div`
    width: 100%;
    display: flex;
    height: 170px;
    background-color:#dddddd;
    padding: 10px 30px;
    margin-bottom: 20px;
   
`

const Vaga = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 30px;
    background-color:#dddddd;
    padding: 0 10px;
    margin-bottom: 5px;
    color: #444444;
    font-weight: 700;
`