import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa';


const Navbar = ()=>{

    return (
        <Container>
        <Footer>
            <Links>
                <LinkAcesso to="/"><FaHome/>Home</LinkAcesso>
                <LinkAcesso to="/">Vagas</LinkAcesso>
                <LinkAcesso to="/">Catálogo de Empresas</LinkAcesso>
            </Links>
            <button>ACESSAR</button>
        </Footer>
            <Content>
                <span>2022. Todos os Direitos Reservados.</span>
                <span>Desenvolvido por Kadson Lima.</span>
            </Content>
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
    height: 30px;
    background-color: #eeeeee;
    font-size: small;
    padding: 0 20px;
    font-weight: 600;
    color: #444444;
    justify-content: space-between;
    align-items: center;
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

const Footer = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #444444;
    padding: 8px 20px;
    align-items: center;
    justify-content: space-between;
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
    color: #bdbdbd;
    font-weight: 700;
`

export default Navbar;