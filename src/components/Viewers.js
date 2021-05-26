import React from 'react';
import styled from "styled-components";
import disney from "../images/viewers-disney.png";
import pixar from "../images/viewers-pixar.png";
import marvel from "../images/viewers-marvel.png";
import starwars from "../images/viewers-starwars.png";
import national from "../images/viewers-national.png";

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={disney} alt="" />
            </Wrap>

            <Wrap>
                <img src={pixar} alt="" />
            </Wrap>

            <Wrap>
                <img src={marvel} alt="" />
            </Wrap>

            <Wrap>
                <img src={starwars} alt="" />
            </Wrap>

            <Wrap>
                <img src={national} alt="" />
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));
`
const Wrap = styled.div`
border-radius: 10px; 
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img {
    width: 100%;
    height: 100%;
    objecti-fit: cover;
}

&:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}
`
