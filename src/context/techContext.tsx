import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { useEffect } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IChildren {
  children: ReactNode;
}

interface Iprovider {
  isOpenModal: boolean;
  setIsOpenModal: (active: boolean) => void;
  createTech: (data: ICreateTechData) => void;
  deleteTech: (tech_id: string) => void; ////////
  techs: ITechs[] | [];
  dataUser: IData;
  //techs: {
  //[key: string]: ITechs;
  //};
}

export interface IData {
  id: string;
  title: string;
  status: string;
  name: string;
  course_module: string;
}

interface ITechs {
  id: string;
  title: string;
  status: string;
}

interface ICreateTechData{
  title:string,
  status:string
}

export const techContext = createContext<Iprovider>({} as Iprovider);

export const TechProvider = ({ children }: IChildren) => {
  const [techs, setTechs] = useState<ITechs[]>([] as ITechs[]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataUser, setDataUser] = useState<IData>({} as IData);

  const createTech = (data: ICreateTechData) => {
    console.log(data);
    const token = localStorage.getItem("@kenzie-hub-login-token");
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIsOpenModal(false);
        toast.success("Tecnologia criada com sucesso :)", {
          autoClose: 1500,
        });
        atualizar();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Oops! Erro ao criar tecnologia :(", {
          autoClose: 1500,
        });
      });
  };

  function atualizar() {
    const token = localStorage.getItem("@kenzie-hub-login-token");
    api
      .get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechs(response.data.techs);
        setDataUser(response.data);
        console.log(dataUser);
      });
  }

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@kenzie-hub-login-token");
    api
      .get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechs(response.data.techs);
        setDataUser(response.data);
      })
      .catch(()=>  navigate("/login", { replace: true }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const deleteTech = (tech_id: string) => {
    //////
    const token = localStorage.getItem("@kenzie-hub-login-token");
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("tecnlogia deletada com sucesso", {
          autoClose: 1500,
        });
        atualizar();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao excluir tecnologia. Tente novamente!", {
          autoClose: 1500,
        });
      });
  };

  return (
    <techContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        createTech,
        deleteTech,
        techs,
        dataUser,
      }}
    >
      {children}
    </techContext.Provider>
  );
};
