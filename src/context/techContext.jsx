import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { AuthContext } from "./context";
import { toast } from "react-toastify";
import { api } from "../api/api";

export const techContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(AuthContext);
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
        /*setTechs([...techs, response.data]);
        setIsOpenModal(false);
        toast.success("Tecnologia criada com sucesso :)");*/
      })
      .catch((err) => {
        console.log(err);
        toast.error("Oops! Erro ao criar tecnologia :(");
      });
  };



  const deleteTech = (tech_id) =>{
    const token = localStorage.getItem("@kenzie-hub-login-token");
     axios.delete(`https://kenziehub.herokuapp.com/users/techs/${tech_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
          }
    })
    .then((response)=>{
        const newTechs = techs.filter((tech) => tech.id !== tech_id);
        setTechs(newTechs);
        toast.success("tecnlogia deletada com sucesso");
    })
    .catch((err)=> {
        console.log(err);
        toast.error("Erro ao excluir tecnologia. Tente novamente!");
    })
  }

  return (
    <techContext.Provider value={{ isOpenModal, setIsOpenModal , createTech, deleteTech}}>
      {children}
    </techContext.Provider>
  );
};
