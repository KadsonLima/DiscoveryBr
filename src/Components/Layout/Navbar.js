import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa';
import { useState } from "react";


const Navbar = ()=>{
    const [modal, setModal] = useState(false);

    const Modal = modal&&<Aba/>

    return (
        <Container>
        <Content>
            <Links>
                <LinkAcesso to="/"><FaHome/>Home</LinkAcesso>
                <LinkAcesso to="/">Vagas</LinkAcesso>
                <LinkAcesso to="/">Catálogo de Empresas</LinkAcesso>
            </Links>
            <button onClick={()=>{setModal(!modal)}}>ACESSAR</button>
        {Modal}
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
    position: relative;
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
const Login = styled.div`
    background-color: #eeeeee;
    width: 350px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: #444444;
    font-weight: 700;
    top: 30px;
    right: 10px;
    position: absolute;
    border: 2px solid #444444;
    div{
        display: flex;
    }
    .login{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2px;
        border-right: 1px solid #444444;
        padding: 2px;
    }
    .cadastro{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 5px;
        justify-content: space-around;
        button{
            width: 100px;
            height: 20px;
            padding: 2px;
        }
    }
    h3{
        width: 100%;
        background-color: #dddddd;
    }
    h4{
        font-size: smaller;
    }
`
export const Aba = () =>{
    return (
        <Login>
            <h3>Fazer Login</h3>
            <div>
                <div className="login">
                    <h4>Já tenho uma conta</h4>
                    <input name="email" placeholder="e-mail"></input>
                    <input name="password" placeholder="senha"></input>
                    <button>Entrar</button>
                </div>
                <div className="cadastro">
                    <h4>Ainda não é cadastrado?</h4>
                    <button>Cadastre-se</button>
                </div>
            </div>
        </Login>
    )
}

export default Navbar;