import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function NavBar(props) {

  const [activeLink, setActiveLink] = React.useState('dashboard');
  return (
    

    <Navbar bg="color" variant ="dark" fixed="top" expand="lg">
      <Navbar.Brand>
      <img src= "https://cdn.vectorstock.com/i/1000x1000/45/29/cute-dog-flat-logo-icon-vector-32724529.webp" width="100" hight="50" object-fit="contain" border-radius="60" />
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>

      <Nav
        defaultActiveKey={activeLink}
        onSelect={(selectedKey, e) => {
          setActiveLink(selectedKey);
        }}
      >
        <Nav.Link href="/dashboard" eventKey="dashboard"> Dashboard</Nav.Link>
        <Nav.Link href="/note" eventKey="note"> Add Notes</Nav.Link>
        <Nav.Link href=""> Favorites</Nav.Link>
        <NavDropdown title ="Classes"> 
        <DropdownItem href=""> Math</DropdownItem>
        <DropdownItem href=""> History</DropdownItem>
        <DropdownItem href=""> Programing</DropdownItem>
        </NavDropdown>
        <Nav.Link> Logout</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  )

  // return (
  //   <nav>
  //     <a href="/">
  //        Logo
  //        </a>
  //        <ul>
  //         <li>
  //           <a href ="/dashboard">
  //             Dashboard
  //           </a>
  //         </li>
  //         <li>
  //           <a href ="/post">
  //             Post
  //           </a>
  //         </li>
  //         <li>
  //           <a href ="/favorites">
  //             Favorites
  //           </a>
  //         </li>
  //         <li>
  //           <a href ="/classes">
  //             Classes
  //           </a>
  //         </li>
  //         <li>
  //           <a href ="/logout">
  //             Logout
  //           </a>
  //         </li>
  //        </ul>

  //   </nav>
  // )

}