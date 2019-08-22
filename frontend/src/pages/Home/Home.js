import React, { Component } from 'react';
import '../../styles/global.css';
import NavBar from '../../components/Navbar';
import './style.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <section id = "section1">
          <NavBar />
        </section>
        <section id = "section2">
        </section>
        <section id = "section3">
        </section>
      </>
    )
  }
}
