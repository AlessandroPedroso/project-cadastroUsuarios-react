import React, {useState, useEffect} from "react";
import axios from 'axios';

import Avatar from '../../assets/avatar.svg'
import Seta from '../../assets/seta.svg'

import { HiTrash } from "react-icons/hi";

import { Container, H1, Image, ContainerItens, Button,User } from "./styles";

const Users = () => {

  const [users,setUsers] = useState([]);

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

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens>
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

        <Button> <img alt="seta" src={Seta} />  Voltar</Button>

      </ContainerItens>
    </Container>
  )

}

export default Users