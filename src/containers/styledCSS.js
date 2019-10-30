import styled, { keyframes,css } from 'styled-components'

const Title = styled.h1`
margin-bottom: 2px;
` 

const Tagline = styled.p`
margin: 0;
font-size: calc(5px + 2vmin);
`

const Input = styled.input`
  border-radius=999px;
  padding: 3px;
  border: 0.2vw solid black;
  border-radius: 0.1rem;
  
  &:focus {
    outline: 2px solid green;  
 }
  
 ${props =>
    props.type === 'submit' &&
    css`
      background: palevioletred;
      color: white;
      cursor: pointer;
    `}

    ${props =>  
     (props.error && props.value.length > 0) &&
       css`
       outline: 2px solid red !important ;
       `
    }


`
const Dropdown = styled.select`
  border-radius=999px;
`

const ErrorMessage = styled.p`
  font-size:0.5rem;
  color:red;
`

//Animation
const blinking = keyframes`
  0% { border: 2px dotted blue;}
  100% {border: 2px dotted pink;}
`
const RepoCard = styled.li`
list-style: none;
padding: 0px;
border-style: solid;
border-width: 0.5vw;
border-color: black;
width: 200px;
border-radius: 0.3rem;

&:hover {
border-width: 0.7vw;
border-color: #B6C3CC;
}
`

const ReposListContainer=styled.ul`

`


export {
  Title,
  Tagline,
  Input,
  Dropdown,
  ErrorMessage,
  RepoCard,
  ReposListContainer
}