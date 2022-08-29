import { createContext, ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const AuthContext = createContext<IProvider>({} as IProvider);

interface IChildren {
  children : ReactNode
}

interface Idata{
  email: string,
  senha:string
}

export interface Idados{
  email: string,
  senha: string,
  nome: string,
  bio: string,
  contato:string,
  module:string
}

export interface IProvider{
  
  user: Idados,
  functionLogin: (data: Idata)=>void,
  functionRegister:(dados: Idados)=>void,
  logout:()=>void
}

export const AuthProvider = ({ children} : IChildren ) => {
  const navigate = useNavigate();
  const [user, setUser] = useState <Idados> ( {} as Idados);

  const functionRegister = (dados: Idados) => {
    const newUser = {
      email: dados.email,
      password: dados.senha,
      name: dados.nome,
      bio: dados.bio,
      contact: dados.contato,
      course_module: dados.module,
    };
    console.log(newUser);
    api
      .post("/users", newUser)
      .then((response) => console.log(response.data))
      .then(() =>{

          navigate("/login", { replace: true })
          toast.success("Cadastro criado com sucesso!!", {
            autoClose: 1500,
          })
      }
      )
      .catch((err) => {
        console.log(err);
        toast.error("Usuário ou senha incorretos", {
          autoClose: 2000,
        });
      });
  };

  const functionLogin = (data: Idata) => {
    const newUser = {
      email: data.email,
      password: data.senha,
    };
    api
      .post("/sessions", newUser)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@kenzie-hub-login-token",response.data.token);
      
        
        const dadosUsuario = response.data;
        setUser(dadosUsuario);

        setTimeout(() => navigate("/homepage", { replace: true }), 2500);

        toast.success("Você está sendo redirecionado", {
          autoClose: 1500,
        });
      
        
      })
      .catch((err) => {
        console.log(err);
        toast.error("Usuário ou senha incorretos", {
          autoClose: 2000,
        });
      });
  };

  function logout() {
    window.localStorage.removeItem("@kenzie-hub-login-token");
    
    toast.error("Você está sendo desconectado", {
      autoClose: 1500,
    });
    setTimeout(() => navigate("/login", { replace: true }), 2500);
  }

  return (
    <AuthContext.Provider value={ {user, functionLogin, functionRegister, logout} }>
      {children}
    </AuthContext.Provider>
  );
};

