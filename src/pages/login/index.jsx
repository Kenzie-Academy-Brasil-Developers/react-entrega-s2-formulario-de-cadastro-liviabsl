import Container from "../../components/Login/container/container";

function LoginPage({setUser, user}){
    return(
        <Container setUser={setUser} user={user}></Container>
    )
}

export default LoginPage