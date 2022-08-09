import styled from "styled-components";



export const Total = styled.div`
    width: 100vw;
    
    overflow-x: hidden;

    @media only screen and (min-width: 768px){
      height: 100%;
    }

    >a{
      >button{
        border: none;
        background-color: #212529;
        padding: 0.5rem 0.8rem;
        border-radius: 5px;
        margin-left: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
        color: white;
        cursor: pointer;
        transition: 0.5s;

        :hover{
          color: black;
          background-color: white;
        }
    }
    }

`


export const ContainerRegister = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Montserrat&family=Poppins&display=swap");

  font-family: inter;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #212529;
  color: white;
  margin-left: auto;
  margin-right: auto;
  height: max-content;

  >h1{
    margin: 0;
    font-size: larger;
  }

  > form {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-direction: column;

    >label{
        font-size: small;
    }

    > input, select {
      width: 80%;
      padding: 0.4rem;
      border-radius: 5px;
      background-color: #343B41;
      border: solid 2px white;
      color: #868E96;
  
    }

    >p{
        margin: 0;
        font-size: small;
    }

    >span{
      font-size: smaller;
      color: red;
    }
    
  }

  >span{
    color: #939393;
    font-size: small;
}


    @media only screen and (min-width: 768px){
        width: 30%;
        gap: 10px;
        height: max-content;
        padding: 20px 0;
    }
`;



export const Button = styled.button`
  border-radius: 5px;
  width: 86%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  padding: 0.6rem;
  cursor: pointer;
  background-color: ${(props) => props.buttonColor  || "#FF577F"};
  transition: 1s;

  :hover{
    background-color: #ffff;
  }
`;
