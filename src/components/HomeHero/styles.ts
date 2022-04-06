import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  overflow-y: hidden;

  div{
    margin-left:2rem;
  }
  
  > img {
    width: 40rem;
    flex: 1;
  }
  > div {
    flex: 4;
  }
  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
    > div {
      flex: 1;
      margin-left:0
    }
  }
  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
      margin-left:0
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  h1 {
    font-size: 7rem;
    color: ${({ theme }) => theme.primary};
  }
  h2 {
    font-size: 3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;
  overflow-x: hidden;

  button{
    height: 2rem;
    width: fit-content;
    border-radius: .5rem;
    margin-left: 1rem;
    background: ${({theme})=> darken(0.1, theme.primary)};
    border: none;
    transition: 0.5s;

    a {
      color:black;
      font-size: 1rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      
      transition: 0.5s;
    }

    &:hover{
      transform: scale(1.2);
      background: ${({theme})=> darken(0.15, theme.primary)} ;
    }
  }

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:nth-child(2) {
    align-self: flex-end;
  }
  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;