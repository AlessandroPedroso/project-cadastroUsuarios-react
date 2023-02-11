import React, { useRef, useState } from "react";
import axios from 'axios';
import People from '../../assets/people.svg'
import Seta from '../../assets/seta.svg'
import { useHistory } from "react-router-dom";

//Componentes
import H1 from '../../Components/Title';
import ContainerItens from '../../Components/ContainerItens'
import Button from "../../Components/Button";
//

import { Container, Image, InputLabel, Input } from "./styles";

const App = () => {
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  async function addNewUser() {

    const name = inputName.current.value;
    const age = inputAge.current.value;

    // const response = await axios.post('http://localhost:3000/users', {name:name, age:age})
    // console.log(response.data);

    if (name === '' && age === '') {
      alert('Campo precisa ser Preenchido')
      //console.log(newUser);

    } else {
      const { data: newUser } = await axios.post('http://localhost:3000/users', { name: name, age: age })
     
      history.push('/usuarios');
    }

    // console.log(inputName.current.value);
    // console.log(inputAge.current.value);
    // setUsers([...users, {id:Math.random(), name:inputName.current.value, age:inputAge.current.value}]);
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1 titulo={"Podemos chamar por aqui"}>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Seta} /> </Button>

      </ContainerItens>
    </Container>
  )

}

export default App