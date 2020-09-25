import React, { Component } from 'react';
import Utama from './components/utama';
import {Link} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLink
} from 'react-bootstrap';


class App extends React.Component{
  render(){
    return(
      <div>
     <Navbar bg="info" expand="lg" variant="dark">
        <Navbar.Brand href="/beranda"><h4>Daftar Pembelanjaan</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="navbar-nav ml-auto" className="justify-content-end" activeKey="/home"> 
            <Nav.Link href="/belanja">List Belanja</Nav.Link>
          
       </Nav>
       </Navbar.Collapse>
       </Navbar> 
       <Utama/>
      </div>
   
    )
  }
}
export default App;

