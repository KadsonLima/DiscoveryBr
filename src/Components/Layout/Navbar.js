import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa';


const Navbar = ()=>{

    return (
        <Container>
        <Content>
            <Links>
                <LinkAcesso to="/"><FaHome/>Home</LinkAcesso>
                <LinkAcesso to="/">Vagas</LinkAcesso>
                <LinkAcesso to="/">Catálogo de Empresas</LinkAcesso>
            </Links>
            <button>ACESSAR</button>
        </Content>
        <Banner/>
        <SearchBar>
            <input type="text" placeholder="Encontre uma vaga"></input>
            <input type="submit" value="Buscar"></input>
        </SearchBar>
        </Container>
    )

}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #eeeeee;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;

    button{
        width: 80px;
        height: 70%;
        background-color: orange;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;

        &:hover{
            filter: brightness(0.9);
        }
    }
`
const Banner = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    background-color: steelblue;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
`

const SearchBar = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #444444;
    padding: 8px 20px;
    align-items: center;
    gap: 6px;
    input{
        height: 100%;
        width: 380px;
    }
    input[type="submit"]{
        width: 80px;
    }
`


const Links = styled.div`
    display: flex;
    height: 100%;
    gap: 20px;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
`

const LinkAcesso = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #444444;
    font-weight: 700;
`

export default Navbar;