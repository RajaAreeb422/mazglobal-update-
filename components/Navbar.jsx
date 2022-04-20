import { useEffect, useState ,useContext} from "react";
//import { useSelector } from "react-redux";

import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
   Phone,
   Email
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
//import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
//import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav } from "react-bootstrap";

import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Navbar2 = () => {
//   const [blist, setBlist] = useState(false);
//   const [loggedIn, setloggedIn] = useState("");
//   const [user, setUser] = useState({
//     first_name: "",
//   });
//   const [items, setItems] = useState([]);
//   const [cats, setCats] = useState([]);
//   const [coll, setColl] = useState([]);
//   const [show, setShow] = useState(false);

  //const { cartItems } = useSelector((state) => state.cart);
 

//   function mouseLeave() {
//     clearInterval(scrollToken);
//   }

//   const showDropdown = (e) => {
//     setShow(!show);
//   };
//   const hideDropdown = (e) => {
//     setShow(false);
//   };

//   const removeToken = () => {
//        console.log('hry removvee')
//        localStorage.removeItem('token')
//         router.push('/')
//   };

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setloggedIn(localStorage.getItem('token'))
//       console.log('token',localStorage.getItem('token'))
//       //setloggedIn("");
//       var decoded = jwt_decode(localStorage.getItem("token"));
//       setUser(decoded.result);
//     } else {
//       setloggedIn("");
//     }
//     let list = [];
//     axios
//       .get(`http://localhost:8080/ecom-api/suppliers`)
//       .then((resp) => {
//         resp.data.data.map((it, i) => {
//           list.push(it);
//         });
//         setItems(list);
//       })
//       .catch((err) => console.log(err));

//     axios
//       .get(`http://localhost:8080/ecom-api/categories`)
//       .then((resp) => {
//         setCats(resp.data.data);
//       })
//       .catch((err) => console.log(err));
//     axios
//       .get(`http://localhost:8080/ecom-api/collections`)
//       .then((respo) => {
//         setColl(respo.data.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
  return (
    // className={nav.Container}
    <div>
        {/* className={nav.Wrapper} */}
      <div >
      {/* className={nav.Topbar} */}
        <div style={{display:'flex',flexDirection:'row',backgroundColor:'whitesmoke'}} >
         <div>
           
           <p>+92-3315677071</p>  
         </div>

         <div>
           
           <p>mazglobal@gmail.com</p>  
         </div>
         <input type="text" placeholder="Search Product" />
         <div
       //  className={nav.Search}
        style={{ color: "gray", fontSize: 18 }}
        />
        <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        style={{ marginTop: "-60px" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav style={{ marginLeft: "auto", marginRight: "auto" }}>
              <NavDropdown
                style={{ marginLeft: "10px" }}
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
        </div>
        </div>
        </div>
  );
};

export default Navbar2;            
         
          {/* <div className={nav.MeniItems}>
            <div className={nav.StyledLink} href="/">
              <p>
                
                <Link href="/" as={`/`}>
                  <img
                    src="/pernia.png"
                    style={{ marginLeft: "600px", marginTop: "10px" }}
                    className={nav.Logo}
                    width={100}
                  />
                </Link>
              </p>
            </div>
          </div> */}

         
       

       

        {/* <div className={nav.Right}>
        

          <Link href="/cart" as={`/cart`}>
            <div className={nav.Link}>
              <div className={nav.StyledLink}>
                <div className={nav.icons}>
                  <div className={nav.SearchContainer}>
                    <input type="text" placeholder="Search Product" />
                    <div
                      className={nav.Search}
                      style={{ color: "gray", fontSize: 18 }}
                    />
                  </div>
                  <LocalShippingOutlined
                    color="action"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "38px",
                      marginRight: "20px",
                    }}
                  />
                  {cartItems.length > -1 && (
                    <Badge badgeContent={cartItems.length} color="primary">
                      <ShoppingCartOutlined
                        color="action"
                        style={{
                          cursor: "pointer",
                          color: "black",
                          fontSize: "38px",
                          marginRight: "20px",
                        }}
                      />
                    </Badge>
                  )}
                </div>
            
              </div>
            </div>
          </Link>









          {loggedIn != "" ? (

               <NavDropdown
                style={{ marginLeft: "10px" }}
                id="nav-dropdown-dark-example"
                title={<Avatar
                  alt={user.first_name}
                  src="/static/images/avatar/1.jpg"
                />}
                menuVariant="light"
                >
                  
                  <Link href="userProfile/profile" >
                    <NavDropdown.Item href="userProfile/profile">
                      Account
                    </NavDropdown.Item>
                  </Link>
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" >
                  <p onClick={removeToken}>Logout</p>
                </NavDropdown.Item>
                </NavDropdown>
            
          ) : (
           
            <NavDropdown
                style={{ marginLeft: "10px" }}
                id="nav-dropdown-dark-example"
                title={<Person/>}
                menuVariant="light"
                >
                  
                  <Link href="/account/login" >
                    <NavDropdown.Item href="/account/login">
                      Login
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/account/register" >
                    <NavDropdown.Item href="/account/register">
                      Register
                    </NavDropdown.Item>
                  </Link>
                
                <NavDropdown.Divider />
                
                </NavDropdown>

          )}
          <>
 
          </>
         
        </div> */}
      
     
{/* 
      <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        style={{ marginTop: "-60px" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav style={{ marginLeft: "auto", marginRight: "auto" }}>
              <NavDropdown
                style={{ marginLeft: "10px" }}
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
              </NavDropdown> */}
{/* 
              <NavDropdown
                style={{ marginLeft: "10px" }}
                id="nav-dropdown-dark-example"
                title="Brands"
                menuVariant="dark"
              >
                {items.map((cl) => (
                  <Link href="/brand/[id]" as={`/brand/${cl.id}`}>
                    <NavDropdown.Item href="category/${cl.id}">
                      {cl.name}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown> */}

              {/* {cats.map((cItem) => (
                <NavDropdown
                  style={{ marginLeft: "10px" }}
                  id="nav-dropdown-dark-example"
                  title={cItem.name}
                  menuVariant="dark"
                >
                  {coll.map((cl) =>
                    cl.category_id == cItem.id ? (
                      <Link href="/category/[id]" as={`/category/${cl.id}`}>
                        <NavDropdown.Item href="category/${cl.id}">
                          {cl.name}
                        </NavDropdown.Item>
                      </Link>
                    ) : (
                      ""
                    )
                  )}
                </NavDropdown>
              ))} */}
    //       
  
