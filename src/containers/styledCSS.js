import styled, { keyframes, css } from "styled-components";

const Title = styled.h1`
  margin-bottom: 2px;
  font-family: "Monoton", cursive;
  font-size: calc(70px + 4vmin);

  ${props =>
    props.type === "repo" &&
    css`
      font-size: 1rem;
      font-weight:400;
    `}
`;

const GenieImage = styled.img`
  height: 40vmin;
`;

const Input = styled.input`
  border-radius=999px;
  padding: 3px;
  border: 0.2vw solid black;
  border-radius: 0.1rem;
  font-family: 'Roboto', sans-serif;
  margin: 3px;
  text-align: center;
  &:focus {
    outline: 2px solid green;  
 }
  
 ${props =>
   props.type === "submit" &&
   css`
      font-weight: bold;
      background: palevioletred;
      color: white;
      cursor: pointer;
      display: block;
      margin: auto
      margin-top:6px;
    `}

    ${props =>
      props.error &&
      props.value.length > 0 &&
      css`
        outline: 2px solid red !important ;
      `}


`;
const Dropdown = styled.select`
  border-radius: 999px;
  font-family: "Roboto", sans-serif;
  font-size: inherit;
  border: 0.2vw solid black;
  border-radius: 0.1rem;
  text-align-last: center;
  background: white;
  margin: 3px;
`;

const ErrorMessage = styled.p`
  font-size: 0.6rem;
  font-weight: bold;
  background-colout: white;
  color: red;
  font-family: "Roboto", sans-serif;
`;

//Animation
const blinking = keyframes`
  0% { border: 2px dotted black}
  100% {border: 2px dotted white}
`;

const Tagline = styled.p`
  margin: auto;
  font-size: calc(10px + 2vmin);
  font-family: "Monoton", cursive;
  margin-bottom: 15px;
  width: fit-content;
  padding: 4px;
  animation: ${blinking} 1s infinite;
`;

const RepoCard = styled.li`
  font-family: "Roboto", sans-serif;
  list-style: none;
  border: black 0.3vw solid;
 
  margin-bottom: 16px;
  width: 200px;
  border-radius: 0.3rem;

  &:hover {
    border-width: 0.7vw;
    border-color: white;
  }
`;

const ReposListContainer = styled.ul`
display: flex;
justify-content: space-between;
flex-wrap:wrap
padding: 4px;
margin: 1rem;
`;

const Form = styled.form`
  margin-bottom: 16px;
`;

const RepoInfo = styled.div`
font-family: "Roboto", sans-serif;
font-weight:bold;
font-size: calc(6px + 1vmin);
margin-bottom: 3px;
`;

const Link= styled.a`
cursor:pointer;
font-size: calc(6px + 1vmin);
font-weight:bold;
color: inherit; 
&:link { 
  text-decoration: none; 
} 
&:hover { 
  text-decoration: underline; 
} 
`

export {
  Title,
  Tagline,
  Input,
  GenieImage,
  Dropdown,
  ErrorMessage,
  RepoCard,
  ReposListContainer,
  Form,
  RepoInfo,
  Link
};
