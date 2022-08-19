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

export const TecnologiasHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    @media only screen and (min-width: 768px){
        color: white;
    }

    >h1{
        font-size: 25px;
        color: #F8F9FA;
    }

    >button{
        background-color: #212529;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;
        width: 20px;
        height: 20px;
        padding: 20px;

        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`

export const TecnologiasCard = styled.ul`
    margin-left: 10px;
    margin-right: 10px;


    background-color: #212529;
    padding: 20px;
    border-radius: 5px;
    
`
export const Card = styled.div`
        margin-bottom: 10px;
        margin-top: 10px;
        border-radius: 5px;
        padding: 10px;
        background-color: #121214;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;

        >h1{
            font-size: large;
        }

        >p{
            font-size: medium;
            color: #868E96;
        }
        >button{
            background-color: #121214;
            border: none;
            cursor: pointer;
            
            >img{
                width: 14px;
                height: 14px;
            }
        }

`

export const Modal = styled.div`
    border-radius: 10px ;
    width: 330px;
    height: 300px;
    background-color: #212529;
    position: fixed;
    top: 150px;
    left: 20px;
    
    >div{
        border-radius: 10px 10px 0 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #343B41;
        
        

        >h1{
            color: #F8F9FA;
            font-size: medium;
            padding: 5px;
        }

        >button{
            font-size: larger;
            color: #868E96;
            border: none;
            background-color: #343B41;
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 768px){
        position: fixed;
        left: 500px;
    }
`

export const Form = styled.form`
    display: flex;
    color: white;
    align-items: center;
    flex-direction: column;

    > input {
      width: 80%;
      padding: 0.6rem;
      border-radius: 5px;
      background-color: #343B41;
      border: solid 2px white
    }

    >select{
        width: 86%;
      padding: 0.6rem;
      border-radius: 5px;
      background-color: #343B41;
      border: solid 2px white;
      color: gray;
    }

    >span{
        font-size: smaller;
        color: red;
    }

`
