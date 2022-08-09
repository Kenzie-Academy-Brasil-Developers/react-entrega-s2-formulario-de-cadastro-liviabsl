import { useNavigate } from "react-router-dom";
import { ContainerHome, Conteudo, Header, Welcome } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContainerFunction({user}){

    const notifyLogout = () => toast.error("Você está sendo desconectado", {
        autoClose: 2000
    });

    const navigate = useNavigate()

    function logout(){
        window.localStorage.removeItem("@kenzie-hub-login-token")
        window.localStorage.removeItem("@kenzie-hub-login-userid")
        notifyLogout()
        setTimeout(() => {
        navigate("/login", {replace:true})
        }, 4000)
    }

    console.log(user.user.name)

    return(
        <ContainerHome>
            <Header>
                <img src="./Logo.png" alt="Logo"></img>
                <button onClick={logout}>Sair</button>
            </Header>

            <Welcome>
                <h1>Olá, {user.user.name} </h1>
                <p>{user.user.course_module} - Introdução ao Frontend</p>
            </Welcome>

            <Conteudo>
                <h1>Que pena! Estamos em desenvolvimento </h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
            </Conteudo>
            <ToastContainer />
        </ContainerHome>
    )
}

export default ContainerFunction