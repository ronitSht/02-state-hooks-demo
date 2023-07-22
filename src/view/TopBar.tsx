import { ReactNode } from "react";
// import reactLogo from '/icons/logo.svg';// load at runtime from public
// import logo from '../assets/react.svg';// embedded in the bundle at build
import styled, {keyframes} from 'styled-components';

interface Props {
  children?: ReactNode;
}

const spin = keyframes`
to {
  transform: rotate(360deg);
}
`

const Div = styled.div`
background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Img = styled.img`
height: 5rem;
  animation: ${spin} 2s linear infinite;
`

export function TopBar({ children }: Props) {
  return (
    <Div>
      {children}
      <Img src="./icons/logo.svg" alt="logo" />
      {/* <img className="logo" src={reactLogo} alt="logo" /> */}
      {/* <img className="logo" src={logo} alt="logo" /> */}
    </Div>
  );
}
