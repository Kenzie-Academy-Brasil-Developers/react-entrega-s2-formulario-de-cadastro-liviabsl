import { Link } from "react-router-dom";
import {ContainerLogin} from "./style.js"
import { Button } from "./style.js";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Container({user,setUser}){

    const failLogin = () => toast.error("Usuário ou senha incorretos", {
        autoClose: 2000
    });

    const sucessLogin = () => toast.success("Você está sendo redirecionado", {
        autoClose: 1500
    });


    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        senha: yup.string("Senha inválida").required("Senha obrigatória")
    })

    const {register,
         handleSubmit,
        formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    })


    const navigate = useNavigate()

    const onSubmitFunction = (data) => {
        const newUser = {
            email:data.email,
            password:data.senha,
        }
        axios.post("https://kenziehub.herokuapp.com/sessions", newUser)
         .then((response)=> {
            localStorage.setItem("@kenzie-hub-login-token",JSON.stringify(response.data.token));
            localStorage.setItem("@kenzie-hub-login-userid", JSON.stringify(response.data.user.id));
            const dadosUsuario = response.data;
            setUser(dadosUsuario);
            sucessLogin();
            setTimeout(()=>{navigate("/homepage", {replace:true})}, 2500)
            })
            .catch((err)=>{
                console.log(err)
                failLogin()}
                )
    }
    return (

        <>
        <img src="./Logo.png" alt="Logo" className="logoLogin"></img>
        <ContainerLogin>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <label>Email:</label>
                <input placeholder="usuario@gmail.com" {...register("email")}></input>
                <span>{errors.email?.message}</span>

                <label>Senha:</label>
                <input type="password" placeholder="******" {...register("senha")}></input>
                <span>{errors.senha?.message}</span>
                <Button typeof="submit">Entrar</Button> 
            </form>



            <span>Ainda não possui uma conta?</span>
            <Link to={"/register"} buttonColor="#868E96"><Button>Cadastre-se</Button></Link>
            
            <ToastContainer />
        </ContainerLogin>
        </>
    )
}
export default Container