import { Link } from "react-router-dom";
import {ContainerRegister, Total} from "./style.js"
import { Button } from "./style.js";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"



function Container(){

    const navigate = useNavigate()

    const notifySucess = () => toast.success("Cadastro criado com sucesso!!", {
        autoClose: 1500
    });


    const onSubmitFunction = (dados) => {
        const newUser = {
            email:dados.email,
            password:dados.senha,
            name:dados.nome,
            bio:dados.bio,
            contact:dados.contato,
            course_module:dados.module
        }
        console.log(newUser)
        axios.post("https://kenziehub.herokuapp.com/users", newUser)
        .then((response)=> console.log(response.data))
        .then(notifySucess)
        setTimeout(() => {
        navigate("/login", {replace:true})
        }, 4000)
        .catch((err)=> console.log(err))
        
    }
    

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
        /*yup.string().required("Campo obrigatório").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),*/
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
            <form onSubmit={handleSubmit(onSubmitFunction)}>
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