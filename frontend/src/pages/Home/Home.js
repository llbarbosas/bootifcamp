import React, { Component } from 'react';
import '../../styles/global.css';
import NavBar from '../../components/Navbar';
import './style.css'
import image from '../../assets/image.svg'
export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <section id = "section1">
          <img src={image} alt=""/>
          <h1>Seu lugar de estudo</h1>
          <h2>
            Presentations are communication tools 
            that can be used as demonstrations, 
            lectures, speeches, reports, and more. 
          </h2>
        </section>
        <section id = "section2">
        </section>
        <section id = "section3">
        </section>
      </>
    )
  }
}
