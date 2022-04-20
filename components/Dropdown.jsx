import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";

import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
//import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";


import { Navbar, Nav } from "react-bootstrap";

import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Dropdown = () => {
  
  return (
   
      
        <Navbar
         variant="dark"
         bg="dark"
         expand="lg"
        >
        <Container fluid>
          <Navbar.Brand href="#home">Logoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav id='nav'>
              <NavDropdown
              
                id="nav-dropdown-dark-example"
                title="NewIn"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> 
              
              <NavDropdown
              
              id="nav-dropdown-dark-example"
              title="NewIn"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> 

            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
  
    
  );
};

export default Dropdown;
