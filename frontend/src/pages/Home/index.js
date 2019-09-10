import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navbar';

import image from '../../assets/image.svg';

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Container>
          <Image src={image} alt="Cara estudando"></Image>

          <Article>
            <h1>Seu lugar de estudo</h1>
            <p>
              Presentations are communication tools that 
              can be used as demonstrations, lectures, speeches, 
              reports, and more.
            </p>
          </Article>
        </Container>
      </>
    )
  }
}

const Article = styled.article`
  @media (max-width: 780px) {
    margin: auto;
    width: 80%;
  }

  color: white;

  width: 42%;
  margin-left: 45px;

  h1 {
    font-size: 45px;
  }

  p {
    font-size: 20px;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  background-color: var(--primary-color);
  height: 90%;

  padding: 50px;
`;

const Image = styled.img`
  @media (max-width: 780px) {
    margin: auto;
    width: 300px;
  }

  width: 40%;
`;