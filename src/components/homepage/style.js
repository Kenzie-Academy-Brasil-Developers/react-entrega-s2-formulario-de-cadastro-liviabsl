import styled from "styled-components";

export const ContainerHome = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
    

`

export const Header = styled.div`
    border-bottom: solid  5px   #212529;
    display: flex;
    justify-content: space-around;
    padding: 20px;


    
        >button{
        border: none;
        padding: 10px 15px;
        color: white;
        background-color: #212529;
        border-radius: 5px;
        cursor: pointer;
        
    }
    

    >img{
        width: 150px;
        height: 25px;
    }

`

export const Welcome = styled.div`

    border-bottom: solid  5px   #212529;

    >h1{
        color: white;
    }

    >p{
        color: #868E96;
    }

    @media only screen and (min-width: 768px){
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 40px;
    }
`

export const Conteudo = styled.div`
    @media only screen and (min-width: 768px){
        color: white;
    }
`