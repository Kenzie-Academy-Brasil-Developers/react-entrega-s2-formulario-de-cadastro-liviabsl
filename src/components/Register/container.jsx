import { Link } from "react-router-dom";
import {ContainerRegister, Total} from "./style.js"
import { Button } from "./style.js";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../context/context.jsx";



function Container(){
    const {functionRegister} = useContext(AuthContext)
    

    const formSchema = yup.object().shape({
        nome: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        senha: yup.string().required("Campo obrigatório").matches(/([a-z])/, "deve conter ao menos 1 letra minúscula").matches(/(\d)/, "deve conter ao menos 1 número").matches(/(\W)|_/, "deve conter ao menos 1 caracter especial").matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
        senhaConfirmada: yup.string().required("Confirmar senha obrigatório").oneOf([yup.ref('senha')], 'As senhas devem ser iguais'),
        bio: yup.string().required("Campo obrigatório"),
        contato: yup.string().min(11, 'Mínimo 11 números').max(30, 'Maximum value 30').matches(/^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9]+)?)$/, {
            message:'Formato incorreto. Exemplo 25 ou 25.1',
            excludeEmptyString: true
        }),
        module:yup.string().required("Campo obrigatório"),
    })

    const {register, 
        handleSubmit,
        formState:{errors}
        } = useForm({
            resolver: yupResolver(formSchema)
        })

    return(
        <Total>
        <img src="./Logo.png" alt="Logo"></img>
        <Link to={"/login"}><button>Voltar</button></Link>
        <ContainerRegister>
            <h1>Crie sua conta</h1>
            <span>Rápido e grátis, vamos nessa!</span>
            <form onSubmit={handleSubmit(functionRegister)}>
                <label>Nome:</label>
                <input placeholder="Digite aqui seu nome" {...register("nome")}></input>
                <span>{errors.nome?.message}</span>

                <label>Email:</label>
                <input placeholder="Digite aqui seu e-mail"{...register("email")}></input>
                <span>{errors.email?.message}</span>

                <label>Senha:</label>
                <input placeholder="Digite aqui sua senha"{...register("senha")}></input>
                <span>{errors.senha?.message}</span>

                <label>Continuar senha:</label>
                <input placeholder="Digite novamente sua senha"{...register("senhaConfirmada")}></input>
                <span>{errors.senhaConfirmada?.message}</span>

                <label>Bio:</label>
                <input placeholder="Fale sobre você"{...register("bio")}></input>
                <span>{errors.bio?.message}</span>

                <label>Contato:</label>
                <input placeholder="Opção de contato"{...register("contato")}></input>
                <span>{errors.contato?.message}</span>

                <p>Selecione seu módulo</p>
                <select {...register("module")}>
                <option value="Primeiro módulo">Primeiro módulo</option>
                <option value="Segundo módulo">Segundo módulo</option>
                <option value="Terceiro módulo">Terceiro módulo</option>
                <option value="Quarto módulo">Quarto módulo</option>
                <option value="Quinto módulo">Quinto módulo</option>
                </select>
                

                <Button typeof="submit" buttonColor="#868E96">Cadastrar</Button>
                <ToastContainer />
            </form>


        </ContainerRegister>
        </Total>
    )
}

export default Container