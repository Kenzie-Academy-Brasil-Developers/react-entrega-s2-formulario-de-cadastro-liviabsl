import { Link } from "react-router-dom";
import { ContainerLogin } from "./style";
import { Button } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/context";
import { useContext } from "react";


interface IError{
  email:string,
  senha:string
}

function Container() {
  const { functionLogin } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IError>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <img src="./Logo.png" alt="Logo" className="logoLogin"></img>
      <ContainerLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(functionLogin)}>
          <label>Email:</label>
          <input placeholder="usuario@gmail.com" {...register("email")}></input>
          <span>{errors.email?.message}</span>

          <label>Senha:</label>
          <input
            type="password"
            placeholder="******"
            {...register("senha")}
          ></input>
          <span>{errors.senha?.message}</span>
          <Button typeof="submit">Entrar</Button>
        </form>

        <span>Ainda não possui uma conta?</span>
        <Link to={"/register"} >
          <Button>Cadastre-se</Button>
        </Link>

        <ToastContainer />
      </ContainerLogin>
    </>
  );
}
export default Container;
