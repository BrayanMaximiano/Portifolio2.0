import React from "react";
import styled from "styled-components";
import EmailImage from '../assets/EmailSent.png';

const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

   

`
const ImgWrapper = styled.div`
    height: 100%;
    width: 45%;

    @media (max-width:450px){
        display: none;
    }
    `

const Img = styled.img`
    height: 100%;
    width: 100%;
`

const MessageWrapper = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

    @media (max-width:450px){
        margin-top: 250px;
        width: 90%;
    }
`
const IconWrapper = styled.div`
    
    height: 70px;
    width: 70px;
` 
const SuccessIcon = styled.img`
    
`
const Title =styled.h1`
    text-align: center;
    margin-bottom:20px;
    margin-top: 20px;
    color :${({theme})=> theme.primary};
    font-size:2rem;
` 

const Message =styled.p`
    color:white;
    text-align: center;
    font-size: 1.5rem;
`

const Back = styled.a`
    color: white;
    margin-top: 20px;
    text-decoration: underline;
    font-size: 1.2rem;
    text-align: center;
    transition: all ease 0.5s;
    &:hover{
        color: ${({theme})=> theme.primary};
    }
`



export default function EmailSent (){
    return (
        <Container >
            <ImgWrapper>
                <Img src={EmailImage} />
            </ImgWrapper>
            <MessageWrapper>
                <IconWrapper>
                    <SuccessIcon src="https://cdn-icons-png.flaticon.com/512/190/190411.png"/>
                </IconWrapper>
                <Title > Mensagem enviada com sucesso ! </Title>
                <Message > Já recebi seu sua mensagem, em breve entrarei em contato <br/><br/> <strong>Tenha um Ótimo dia !</strong> </Message>
                <Back href="https://front-dev-brayan.vercel.app"> Voltar ao site</Back>
            </MessageWrapper>
        </Container>
    )
}