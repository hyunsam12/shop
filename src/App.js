/* eslint-disable */

import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from 'react-bootstrap';
import './data.js';
import Data from './data.js';




function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Sam's SHOES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>  

<Jumbotron className="background">
  <h1><span className="twenty">20%</span> SEASON OFF!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn More</Button>
  </p>
</Jumbotron>






<div className="container">
  <div className="row">
    {
      shoes.map((a,i)=>{
        return <Card shoes={shoes[i]} i={i}/>
      })
    }  
  </div>
</div>
</div>
  );
}

function Card(props){
  return (
  <div className="col-md-4">
    <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%" />
    <h4>{ props.shoes.title }</h4>
    <p>{ props.shoes.content } , { props.shoes.price }</p>
  </div>     
  )
}


export default App;