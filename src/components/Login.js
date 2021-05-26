import React from 'react';
import styled from "styled-components";
import loginBG from "../images/login-background.jpg";
import CTAOne from "../images/cta-logo-one.svg";
import CTATwo from "../images/cta-logo-two.png";

function Login() {
    return (
        <Container loginBG = {loginBG}>
            <Content>
                <CTA>
                    <CTALogoOne src={CTAOne} alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src={CTATwo} alt="" />
                </CTA>
            </Content>
        </Container>
    )
}

export default Login;

const Container = styled.div`
background-color: black;
opacity: 0.9;
position relative;
height: calc(100vh- 70px);
display: flex;
align-items: top;
justify-content: center;
overflow-x: hidden;


&:before {
    background-image: url(${({ loginBG }) =>loginBG});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
}
`

const Content = styled.div`
max.width: 650px;
padding: 80px 40px;
align-items: center;
`

const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
display: flex;
flex-direction: column;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
    background: #0483ee;
}
`

const Description = styled.p`
font-size: 12px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`

const CTALogoTwo = styled.img`
`