import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
//import Dropdown from './Dropdown'
import { NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Navbar2 = () => {
  // const [blist, setBlist] = useState(false);
  // const [loggedIn, setloggedIn] = useState("");
  // const [user, setUser] = useState({
  //   first_name: "",
  // });
  // const [items, setItems] = useState([]);
  // const [cats, setCats] = useState([]);
  // const [coll, setColl] = useState([]);
  // const [show, setShow] = useState(false);

  //const { cartItems } = useSelector((state) => state.cart);
  
 

  // const removeToken = () => {
  //   console.log("hry removvee");
  //   localStorage.removeItem("token");
  //   router.push("/");
  // };
  // useEffect(() => {
  //   if(localStorage.getItem('token'))
  //   {
  //   setloggedIn(localStorage.getItem('token'))
  //  var decoded = jwt_decode(localStorage.getItem('token'));
  //  setUser(decoded.result)
  //   }
  //   else{
  //       setloggedIn('')
  //   }
  // },[])
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setloggedIn(localStorage.getItem('token'))
  //     console.log('token',localStorage.getItem('token'))
  //     //setloggedIn("");
  //     var decoded = jwt_decode(localStorage.getItem("token"));
  //     setUser(decoded.result);
  //   } else {
  //     setloggedIn("");
  //   }
  //   let list = [];
  //   axios
  //     .get(`http://localhost:8080/ecom-api/suppliers`)
  //     .then((resp) => {
  //       resp.data.data.map((it, i) => {
  //         list.push(it);
  //       });
  //       setItems(list);
  //     })
  //     .catch((err) => console.log(err));

  //   axios
  //     .get(`http://localhost:8080/ecom-api/categories`)
  //     .then((resp) => {
  //       setCats(resp.data.data);
  //     })
  //     .catch((err) => console.log(err));
  //   axios
  //     .get(`http://localhost:8080/ecom-api/collections`)
  //     .then((respo) => {
  //       setColl(respo.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const [state,setState]=useState(   {
    dropdownOpen: false
  })
  
 const  toggle=()=> 
    setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  
  return (
    <div className={nav.Container}>
      <div className={nav.Wrapper}>
        <div className={nav.Topbar}>
          <img
            style={{ marginTop: "8px", marginLeft: "140px", fontWeight: "200" }}
            width="25px"
            height="25px"
            src="data:image/png;base64,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"
          />
          <p
            style={{
              paddingTop: "-12px",
              marginLeft: "10px",
              fontWeight: "200",
            }}
          >
            +92-3315677071
          </p>

          <img
            style={{ marginTop: "8px", marginLeft: "40px", fontWeight: "200" }}
            width="25px"
            height="25px"
            src="data:image/jpeg;base64,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"
          />
          <p style={{ marginLeft: "10px", fontWeight: "200" }}>
            mazglobal@gmail.com
          </p>

          <input
            className={nav.Search}
            type="text"
            placeholder="  Enter Chance No.OEM No, names etc"
          />
        </div>
        <div  className={nav.drp}>
        <img height='120px' src='./Maz Global Logo-02.png'/>
        <ui className={nav.list}>
        <li>Home</li>
        <li>About Us</li>
        {/* <Dropdown isOpen={state.dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          About Us
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown></li> */}
        <li>
        <div className={nav.dropdown}>
         <button className={nav.dropbtn}>Products</button>
          <div className={nav.dropdowncontent}>
    {/* <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a> */}
  </div>
</div>
     </li>   
        <li>News</li>
        <li>Services</li>
        <li>FAQ's</li>
        <li>Contact Us</li>


        </ui>
              </div>

      </div>
    </div>
  );
};

export default Navbar2;
