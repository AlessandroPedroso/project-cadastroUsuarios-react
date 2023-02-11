import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Avatar from '../../assets/avatar.svg'
import Seta from '../../assets/seta.svg'

import { HiTrash } from "react-icons/hi";

//Componentes
import  H1 from "../../Components/Title";
import ContainerItens from "../../Components/ContainerItens";
import Button from "../../Components/Button";
//

import { Container, Image,User } from "./styles";

const Users = () => {

  const [users,setUsers] = useState([]);
  const history = useHistory();

  // assim que minha aplicação for chamada vai buscar os usuários em minha API
  useEffect(()=>{

    async function fetchUsers(){

        const {data: newUsers} = await axios.get('http://localhost:3000/users');
        setUsers(newUsers);
    }

    fetchUsers();

  },[])

const deleteUser = async (id)=>{

    await axios.delete(`http://localhost:3000/users/${id}`);

    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);

  }

  function goHome(){
    history.push('/');
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>
        
        <ul>
          {
              users.map((user) => (
                <User key={user.id}>

                  <p>{user.name}</p> <p>{user.age}</p>

                  <button onClick={()=> deleteUser(user.id)}><HiTrash size={28}/></button>

                  </User>
              ))
          }
        </ul>

        <Button buttonTransparent={true} onClick={goHome}> <img alt="seta" src={Seta} />  Voltar</Button>

      </ContainerItens>
    </Container>
  )

}

export default Users