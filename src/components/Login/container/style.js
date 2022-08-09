import styled from "styled-components";

export const ContainerLogin = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Montserrat&family=Poppins&display=swap");

  font-family: inter;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 15px;
  padding: 30px 0;
  box-sizing: border-box;
  background-color: #212529;
  color: white;

  >h1{
    margin: 0;
    font-size: larger;
  }

  > form {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;

    > input {
      width: 80%;
      padding: 0.6rem;
      border-radius: 5px;
      background-color: #343B41;
      border: solid 2px white
    }

    >a{
      width: 100%;
    }

    >span{
      font-size: small;
      color: red;
    }

  }

  >span{
    color: #939393;
    font-size: small;
}


    @media only screen and (min-width: 768px){
        width: 30%;
        gap: 20px;
        padding: 50px 0;
    }

    >a{
      text-decoration: none;
      
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
  transition: 0.5s;
  color: black;

  :hover{
    background-color: #ffff;
  }
`;
