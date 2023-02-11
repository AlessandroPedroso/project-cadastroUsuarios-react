import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
border: none;
color:white;
outline: none;
background: ${props => props.buttonTransparent ? 'transparent' :  'rgba(0, 0, 0, 0.8)'};
border-radius: 14px;
border: ${props => props.buttonTransparent? '1px solid white':'none'};
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
cursor: pointer;
text-decoration: none;
margin-top: ${props=> props.buttonTransparent ? '90px':''};

display: flex;
align-items: center;
justify-content: center;
gap: 14px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

    img{

        transform: ${props => props.buttonTransparent && `rotateY(180deg)`};
    }

    /* ${props => props.buttonTransparent && `

        margin-top: 90px;

        img{
                transform: rotateY(180deg);
        }
    
    `} */

`;