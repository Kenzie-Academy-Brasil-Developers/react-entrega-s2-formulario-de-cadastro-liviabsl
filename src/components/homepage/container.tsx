import {
  ContainerHome,
  TecnologiasHeader,
  Header,
  Welcome,
  TecnologiasCard,
  Card,
  Modal,
  Form,
} from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Login/container/style";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { techContext } from "../../context/techContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


interface IError{
  title:string,
  status:string
}

function ContainerFunction() {
  const { logout } = useContext(AuthContext);
  const { isOpenModal, setIsOpenModal, createTech, deleteTech, techs, dataUser } =
    useContext(techContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("campo obrigatório"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IError>({ resolver: yupResolver(formSchema) });

  return (
    <ContainerHome>
      <ToastContainer />
      <Header>
        <img src="./Logo.png" alt="Logo"></img>
        <button onClick={logout}>Sair</button>
      </Header>
      <Welcome>
        <h1>Olá, {dataUser.name} </h1>
        <p> {dataUser?.course_module}- Introdução ao Frontend</p>
      </Welcome>
      <TecnologiasHeader>
        <h1>Tecnologias</h1>
        <button onClick={() => setIsOpenModal(true)}>+</button>
      </TecnologiasHeader>

      <TecnologiasCard>

        {techs.map((item) => 
          (
          <Card key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.status}</p>
            <button onClick={() => deleteTech(item.id)}>
              <img src="delete.png" alt="deleteImage"></img>
            </button>
          </Card>
          )
        )}

      </TecnologiasCard>

      {isOpenModal && (
        <Modal>
          <div>
            <h1>Cadastrar tecnologia</h1>
            <button onClick={() => setIsOpenModal(false)}>X</button>
          </div>

          <Form onSubmit={handleSubmit(createTech)}>
            <p>Nome</p>
            <input placeholder="Digite o nome" {...register("title")}></input>
            <span>{errors.title?.message}</span>

            <p>Selecione status</p>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <Button type="submit">Cadastrar tecnologia</Button>
          </Form>
        </Modal>
      )}
    </ContainerHome>
  );
}

export default ContainerFunction;
