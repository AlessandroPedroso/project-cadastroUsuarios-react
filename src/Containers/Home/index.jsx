import React, {useRef} from "react";
import axios from 'axios';
import People from '../../assets/people.svg'
import Seta from '../../assets/seta.svg'

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";

const App = () => {
  
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser(){

    const name = inputName.current.value;
    const age = inputAge.current.value;

    // const response = await axios.post('http://localhost:3000/users', {name:name, age:age})
    // console.log(response.data);

    const {data: newUser} = await axios.post('http://localhost:3000/users', {name:name, age:age})
    console.log(newUser);

    setUsers([...users, newUser]);

    // console.log(inputName.current.value);
    // console.log(inputAge.current.value);
      // setUsers([...users, {id:Math.random(), name:inputName.current.value, age:inputAge.current.value}]);
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
          <Input ref={inputName} placeholder="Nome" />

          <InputLabel>Idade</InputLabel>
          <Input ref={inputAge} placeholder="Idade" />

        <Button  onClick={addNewUser}>Cadastrar <img alt="seta" src={Seta} /> </Button>

      </ContainerItens>
    </Container>
  )

}

export default App