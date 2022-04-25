import { Add, PanToolSharp, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Carousel from "../../../components/Carosel";
import Navbar2 from "../../../components/Navbar2";
import Footer from "../../../components/footer/Footer";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
//import axios from "axios";
//import { addProduct } from '../../../components/redux/action';
import { useRouter } from "next/router";
import React, { memo } from "react";
//import { sliderItems } from "../../../data";
//import { useLocation } from "react-router";
// import { publicRequest } from "../requestMethods";
//import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader,Table } from "reactstrap";
//import { Carousel } from 'react-responsive-carousel';
import router from "next/router";
//import {toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//toast.configure()
import ImageMagnifier from "./ImageMagnifier";

import Related from '../../../components/FeaturesProducts/Related'
//import Rating from '@material-ui/lab/Rating';
//import Typography from "@material-ui/core/Typography";
//import Box from '@material-ui/core/Box';
import css from './index.module.css'
import Navbar from "../../../components/Navbar";
import DataGrid from 'react-data-grid';
const ProductDesp = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [review, setReview] = useState(0);
  const [votes, setVotes] = useState(0);
  const [modal, setModal] = React.useState(false);
  const [togglediv, settoggle] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [slideIndex, setSlideIndex] = useState(0);
  const [path, setPath] = useState([
    "https://www.ks-international.com/media/catalog/product/cache/d3609febb2c99e7862c5859e894847cb/0/7/0704176-web_1.webp",
    "https://www.ks-international.com/media/catalog/product/cache/d3609febb2c99e7862c5859e894847cb/0/7/0704176-web_1.webp",
  ]);

  const [icon, setIcon] = useState([
    { name:'S',status:false},{name:'M',status:false},{name:'L',status:false},{name:'XL',status:false},{name:'XS',status:false}]);
  const [carddiv, setCardDiv] = useState(false);
  const handleClick = (direction) => {
    console.log("hello");
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : path.length);
    } else {
      setSlideIndex(slideIndex < path.length ? slideIndex + 1 : 0);
    }
  };

  const RadioInput = ({ label, value, checked, setter, name }) => {
    const handelChange = (name) => (e) => {};
    //     let list = [...state]

    //     console.log("valueeee", e.target.value);
    //     // console.log('before list', list)

    //     for (var i = 0; i < state.length; i++) {

    //       if (name === (state[i].name)) {

    //         setter(e.target.value)
    //         state[i].value = e.target.value
    //         console.log("listttt", state)
    //         // setstate(list)
    //       }

    //     }

    //     setstate(state)
    //     console.log('RESultttttttt', state)
    //     state.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
    //     var str = ''
    //     state.map(item => {
    //       str = str + item.value + ' '
    //     })
    //     var str_join = str.split(" ").join("_")
    //     var string = str_join.slice(0, -1);
    //     string = string.toLowerCase()
    //     setstrr(string)

    //     console.log(string)

    //     item.combinations.map((v) => {
    //       if (string === (v.product_variant_name)) {

    //         setcomb(v.regular_price)
    //         setCardDiv(true)
    //         setstrr(state)
    //         setvariant_name(v.product_variant_name)
    //         setvid(v.id)
    //       }
    //       // if(comb!='')

    //       // else
    //       // setCardDiv(false)

    //     })
    //     // console.log("price", comb)
    //   }
    

    return (
      <label>
        <input
          type="radio"
          checked={checked == value}
          value={value}
          onChange={handelChange(name)}
        />
        <span>{label}</span>
      </label>
    );
  };

  //   const [state, setstate] = useState([{
  //     id: null,
  //     name: '',
  //     value: ''
  //   }]);

  //const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const ChangeStatus = (i) => {
    console.log("status",icon[i].status)
    icon[i].status=!icon[i].status;
  };
  const decCount = () => {
    setCount(count - 1);
  };

  const [thrddiv, setThrdDiv] = useState(false);
  const [color, setColor] = React.useState();
  const [mat, setMaterial] = React.useState();
  const [size, setSize] = React.useState();

  //   const [item, setItem] = useState({
  //     name: '',
  //     supplier_id: null,
  //     category_id: null,
  //     variants: [],
  //     combinations: [],
  //     images: []
  //   });
  const [item, setItem] = useState({
    id: 1,
    name: "ABC",
    img: "https://www.ks-international.com/media/catalog/product/cache/d3609febb2c99e7862c5859e894847cb/0/7/0704176-web_1.webp",
  });
  const router = useRouter();
  const { id } = router.query;

  // const handleCount = () => {
  //   if (count === 1) {
  //     setCount(count);
  //   } else {
  //     let x = count;
  //     x = x - 1;
  //     setCount(x);
  //   }
  // };
  
  const [comb, setcomb] = useState("");
  const [vid, setvid] = useState();
  const [strr, setstrr] = useState("");
  const [variant_name, setvariant_name] = useState("");
  const [radio, setRadiobtn] = useState({
    selected: "",
    name: "",
  });
  const [radio2, setRadio2btn] = useState({
    selected: "",
    name: "",
  });
  const [radio3, setRadio3btn] = useState({
    selected: "",
    name: "",
  });
  
  const columns = [
    { key: 'name', name: 'Name' },
    { key: 'descp', name: 'Description' }
  ];
  
  const rows = [
    { name: 'Product Name', descp: 'suzu D-Max TFS77 3.0TD 4JH1 (07/2003-08/2006) RETAINER - REAR AXLE' },
  
    { name: 'Chane No', descp: '0704176-1' },
    { name: 'OEM No', descp: '8980093410' },
    { name: 'Cross Ref', descp: '' },
    { name: 'Apllication', descp: ' European truck' },
   
    { name: 'Package', descp: '1.PP bag+individual box+outer carton +pallet.' },

  ];
  return (
    <>
    <Navbar2/>
    <Navbar/>
    <img src='https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg' width='100%'/>
    <Container>
      
      <Wrapper>
        <Boxx>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <ImgWrapper slideIndex={slideIndex}>
            {path.map((pa, i) => (
              <Slide bg={item.id} key={i}>
                <ImgContainer>
                  <ImageMagnifier img={pa} />
                </ImgContainer>
              </Slide>
            ))}
          </ImgWrapper>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </Boxx>

        <InfoContainer>
          <Title>
          suzu D-Max TFS77 3.0TD 4JH1 (07/2003-08/2006) RETAINER - REAR AXLE
          </Title>
          <Desc>
            {/* <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Brand :</p>
              <p style={{ color: "skyblue" }}>HEM</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Collection :</p>
              <p style={{ color: "skyblue" }}>HEM</p>
            </div> */}
            <Ndiv>
            <P>Order By 2PM (Mon - Fri) For Same Day Dispatch</P>
            </Ndiv>
            
          <div style={{display:'flex',flexDirection:'row'}}>
          <h5 style={{color:'white'}}>Part Code :</h5> 
          <p style={{marginTop:'20px',marginLeft:'4px',color:'white'}} >  0704176-1</p> 
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <h5 style={{color:'white'}}>OEM Part Number:</h5> 
          <p style={{marginTop:'20px',marginLeft:'4px',color:'white'}}>   8980093410  </p>
          </div>
          </Desc>

          
          <AddContainer>
          
          
            
          </AddContainer>
          <Desc>
            <p style={{fontSize:'16px',fontStyle:'italic',color:'white' }}>Estimated shipping date: <b>April 27, 2022</b> <br /><br />
              Note:Delivery will vary as per customer location.</p>
          </Desc>
          <div style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
          <p style={{color:'white'}}>Incl.VAT :</p>
          <h2 style={{fontStyle:'italic',marginTop:'10px' ,marginLeft:'4px',color:'yellow'}}>400 RS</h2>
          </div>
          <AmountContainer>
              {/* onClick={() => handleCount(setCount(count - 1))} */}
              <p style={{ fontWeight: "600",fontSize:'20px',marginLeft:'20px',color:'yellow' }}>PKR. 20,000</p>
              <span><button className={css.minus_btn} onClick={decCount}>-</button></span>
              <span><p className={css.counter} style={{color:'white'}}>{count}</p></span>
              <span><button className={css.add_btn} onClick={incrementCount}>+</button></span>
              
              
              {/* <AmountBtn>
                {" "}
                <Remove />
              </AmountBtn>
              <Amount>
                {55}
              </Amount>
              <AmountBtn>
                {" "}
                <Add />
              </AmountBtn> */}
            </AmountContainer>
     


          <Button onClick={() => addToCart()}>ADD TO CART</Button>
         
        </InfoContainer>


        

        

      </Wrapper>
      <MainDiv>
         <div style={{background:'rgba(16, 103, 138, 0.933)' ,padding:'1px',width:'160px'}}>
          <h5 style={{color:'white',textAlign:'center'}}>DESCRIPTION</h5>
         </div> 
         <hr width='860px'  style={{color:'rgba(16, 103, 138, 0.933)',height:'2px',marginTop:'-2px'}}/>
         <SmallDiv>
         <div style={{background:'whitesmoke' ,padding:'1px',width:'100px'}}>
          <h5 style={{textAlign:'center'}} >DETAILS</h5>
         </div> 
         <hr width='800px'  style={{color:'grey',height:'2px',marginTop:'-2px'}}/> 
         <DataGrid columns={columns} rows={rows} />
         </SmallDiv> 

        </MainDiv>
      

      <Related/>
      <Footer /> 
    </Container>
    </>
    
  );
};

export default ProductDesp;

const MainDiv = styled.div`
  border:1px groove whitesmoke;
  width:860px;
  margin-left:auto;
  margin-right:auto;
`;
const SmallDiv = styled.div`
  
  width:800px;
  margin-bottom:30px;
  margin-left:auto;
  margin-right:auto;
`;
const P = styled.p`
text-align:center;
color:black;
font-size:12px;
padding:6px;
`;
const Ndiv = styled.div`
  background-color:whitesmoke;
  width:300px;
  text-align:center;
  margin-bottom:20px;
  margin-left:20px;
  height:40px;
`;
const Review = styled.div`
  margin-top: 450px;
`;
const Size = styled.div`
  margin-left: 20px;
  padding:20px;
`;

const Icon = styled.div`
  height:40px;
  width:40px;
  cursor:pointer;
  margin-right:6px;
  
  border-radius:10px;
  text-align:center;
  border-style:groove;
`;
const SizeArea = styled.div`
  display:flex;
  flex-direction:row;
`;


const Rate = styled.div`
  font-weight: 600;
  font-size: 22px;
  font-family: Times New Roman;
`;

const FilterContainer = styled.div`
  max-width: 40%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  max-width: 50%;
  min-width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FilterSize = styled.span`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;

const FilterSizeOpt = styled.span`
  padding-left: 20px;
`;
const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
  margin-left: 220px;
  margin-right: 150px;
  display: flex;
`;
const Boxx = styled.div`
  padding-top: -200px;
  width: 500px;
  background-color:whitesmoke;
  height: 85vh;
  display: flex;
  position: relative;
  margin-top: 100px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 500px;
  margin-top: -60px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -500}px);
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 500px;

  object-fit: fill;
`;

const InfoContainer = styled.div`
  margin-left: 50px;
  background: linear-gradient(to right, rgba(16, 103, 138, 0.933) , black);
  width: 400px;
  height:640px;
  margin-top: 100px;
 
`;

const Title = styled.h1`
  font-weight: 400;
  color:yellow;
  padding-left: 20px;
  font-size: 26px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color:white;
  padding-left: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const AmountBtn = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;
const Slide = styled.div`
  width: 500px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Button = styled.button`
  cursor: pointer;
  width:300px;
  color:white;
  margin-bottom:30px;
  margin-left:40px;
  margin-right:20px;
  transition: all 0.5s ease;
 
  border: 1px solid teal;
  text-align: center;
  background-color: transparent;
  padding: 8px;
  outline: none;
  font-weight: bold;
  border-radius: 1px;
  &:hover {
    color: #ffffff;
    background-color: teal;
    border: 1px solid teal;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b6b6b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

{
  /* 
            {item.variants.map((v) => (
              <Filter>
                <FilterTitle >{v.name.charAt(0).toUpperCase() + v.name.slice(1)}:</FilterTitle>
                <FilterSize onChange={handelChange(v.name)}>
                  <FilterSizeOption value='' selected disabled>Select Values</FilterSizeOption>
                  {v.values.map((opt) => (

                    <FilterSizeOption value={opt}>{opt}</FilterSizeOption>

                  ))}

                </FilterSize><br />
              </Filter>
            ))} */
}
