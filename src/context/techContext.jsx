import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { AuthContext } from "./context";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { useEffect } from "react";

export const techContext = createContext({});

export const TechProvider = ({ children }) => {
const  [techs, setTechs ] = useState ([]);
  const [isOpenModal, setIsOpenModal] = useState(false);



  const createTech = (data) => {
    console.log(data)
    const token = localStorage.getItem("@kenzie-hub-login-token");
    console.log(token)
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        //setTechs([...techs, response.data]);
        setIsOpenModal(false);
        toast.success("Tecnologia criada com sucesso :)", {
          autoClose: 1500,
        });
        
      })
      .catch((err) => {
        console.log(err);
        toast.error("Oops! Erro ao criar tecnologia :(", {
          autoClose: 1500,
        });
      });
  };


  useEffect(()=> {

    const token = localStorage.getItem("@kenzie-hub-login-token");
    console.log(token)
    const id = JSON.parse(localStorage.getItem("@kenzie-hub-login-userid"));
    console.log(id)
    api.get(`/users/${id}`,  {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response)=> setTechs(response.data.techs))

  },[techs])



  const deleteTech = (tech_id) =>{
    const token = localStorage.getItem("@kenzie-hub-login-token");
     axios.delete(`https://kenziehub.herokuapp.com/users/techs/${tech_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
          }
    })
    .then((response)=>{
    
        toast.success("tecnlogia deletada com sucesso", {
          autoClose: 1500,
        });
    })
    .catch((err)=> {
        console.log(err);
        toast.error("Erro ao excluir tecnologia. Tente novamente!", {
          autoClose: 1500,
        });
    })
  }

  return (
    <techContext.Provider value={{ isOpenModal, setIsOpenModal , createTech, deleteTech, techs}}>
      {children}
    </techContext.Provider>
  );
};
