import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import { MdMenu } from 'react-icons/md';

export default () => (
    <Navbar>
        <Mobile>
            <Button clean href="#">
                <MdMenu size="30" color="white"/>
            </Button>
        </Mobile>

        <Logo href="#" src={logo} />

        <nav>
            <Desktop>
                <li><Button clean href="#">Consultar</Button></li>
                <li><Button clean href="#">Praticar</Button></li>
                <li><Button href="#">Sou professor</Button></li>
            </Desktop>

            <Mobile>
                <li><Button href="#">Login</Button></li>
            </Mobile>
        </nav>
    </Navbar>
);

const Logo = ({ src, href }) => (
    <a href={href}><img src={src} alt="Estudaê logo"></img></a>
);

const Navbar = styled.header`
  background-color: var(--primary-color);

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10%;
  padding: 20px 30px;
`;

const Desktop = styled.ul`
  @media (max-width: 780px) {
    display: none;
  }

  display: flex;

  li { 
    margin-left: 10px;
  }
`;

const Mobile = styled.ul`
  @media (min-width: 780px) {
    display: none;
  }

  display: flex;
  
  li { 
    margin-left: 10px;
  }
`;

const Button = styled.a`
  display: block;
  padding: 10px;

  text-decoration: none;

  color: ${({ clean }) => clean ? 'white' : 'var(--primary-color)'};
  background-color: ${({ clean }) => clean ? 'none' : 'white'};

  border-radius: 5px;
`;