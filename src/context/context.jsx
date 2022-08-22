import { createContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const functionRegister = (dados) => {
    const newUser = {
      email: dados.email,
      password: dados.senha,
      name: dados.nome,
      bio: dados.bio,
      contact: dados.contato,
      course_module: dados.module,
    };
    console.log(newUser);
    axios
      .post("https://kenziehub.herokuapp.com/users", newUser)
      .then((response) => console.log(response.data))
      .then(() =>
        toast.success("Cadastro criado com sucesso!!", {
          autoClose: 1500,
        })
      );
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 4000).catch((err) => console.log(err));
  };

  const functionLogin = (data) => {
    const newUser = {
      email: data.email,
      password: data.senha,
    };
    axios
      .post("https://kenziehub.herokuapp.com/sessions", newUser)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@kenzie-hub-login-token",response.data.token);
        localStorage.setItem(
          "@kenzie-hub-login-userid",
          JSON.stringify(response.data.user.id)
        );
        localStorage.setItem(
          "@kenzie-hub-login-user",
          JSON.stringify(response.data.user)
        );
        const dadosUsuario = response.data;
        setUser(dadosUsuario);

        toast.success("Você está sendo redirecionado", {
          autoClose: 1500,
        });
        setTimeout(() => {
          navigate("/homepage", { replace: true });
        }, 2500);
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
    window.localStorage.removeItem("@kenzie-hub-login-userid");
    toast.error("Você está sendo desconectado", {
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 4000);
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, functionLogin, functionRegister, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
