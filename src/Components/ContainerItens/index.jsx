import React from "react";

import {ContainerItens as Container} from './styles.js'

function ContainerItens(props){
    // console.log(props)
    return(

        <Container isBlur={props.isBlur}>{props.children}</Container>
    )
}

export default ContainerItens