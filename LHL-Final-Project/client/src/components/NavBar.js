import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function NavBar(props) {

  const [classData, setClassData] = useState(undefined)
  const [activeLink, setActiveLink] = React.useState('dashboard');

  useEffect(() => {
    fetch("/classes").then(
      res => res.json())
      .then(data => setClassData(data))
    }, [])
//   const arr = [];
//   const arr1 = [];
//   console.log(classData)
//   const x = classData.classes;
//   console.log(x)
//   for (let i of x) {
//     arr.push(i.name)
//   }
// console.log(arr)
//   for (let i of arr) {
//     return arr1.push((
//       <DropdownItem href=""> {i}</DropdownItem>
//       ))
//   }


  return (


    <Navbar bg="color" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand>
        <img src="https://cdn.vectorstock.com/i/1000x1000/45/29/cute-dog-flat-logo-icon-vector-32724529.webp" width="50" hight="50" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>

        <Nav
        // defaultActiveKey={activeLink}
        // onSelect={(selectedKey, e) => {
        //   setActiveLink(selectedKey);
        // }}
        >
          <Nav.Link href="/dashboard" eventKey="dashboard"> Dashboard</Nav.Link>
          <Nav.Link href="/addNotes" eventKey="note"> Add Notes</Nav.Link>
          <Nav.Link href=""> Favorites</Nav.Link>
          <NavDropdown title="Classes">

          <DropdownItem href="/historyNotes"> History</DropdownItem>
          <DropdownItem href="/mathNotes"> Math</DropdownItem>
          <DropdownItem href="/literatureNotes"> Literature</DropdownItem>


            {/* {arr1} */}
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