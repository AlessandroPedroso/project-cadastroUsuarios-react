import styled from "styled-components";
import Backgorund from '../../assets/background.svg';

export const Container = styled.div`

    background: url("${Backgorund}");
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

`;

export const Image = styled.img`
    margin-top: 30px;
`;

// export const ContainerItens = styled.div`

// background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
// border-radius: 61px 61px 0px 0px;
// backdrop-filter: blur(22.5px);
// padding: 50px 36px;
// display: flex;
// flex-direction: column;
// min-height: calc(100vh - 170px);
// /* height: 100%; */

// `;

// export const Button = styled.button`
// width: 342px;
// height: 74px;
// border: 1px solid white;
// color:white;
// outline: none;
// background: transparent;
// border-radius: 14px;
// font-family: 'Roboto';
// font-style: normal;
// font-weight: 700;
// font-size: 17px;
// line-height: 28px;
// cursor: pointer;
// margin-top: 120px;
// display: flex;
// align-items: center;
// justify-content: center;
// gap: 14px;
// text-decoration: none;



// &:hover{
//     opacity: 0.8;
// }

// &:active{
//     opacity: 0.5;
// }

// img{
//     transform: rotateY(180deg);
// }

// `;

export const User = styled.li`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            color: #FFFFFF;
    }

    button{
        background: none;
        border:none;
        cursor: pointer;
    }

`;
