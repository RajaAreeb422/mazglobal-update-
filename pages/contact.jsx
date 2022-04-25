import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import styled from "styled-components";


import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined,Category, Email,Person,Message } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
const ContactUs=()=>{
  useEffect(() => {
    // alert('Finished loading');
  }, []);
return(
    <>
    <Navbar2/>
    <Navbar/>
    <img src='https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg' width='100%'/>
      <Container>
        {/* <FilterContainer>
          <FilterHome>
            <FilterHomeText>
              <HomeOutlined />
            </FilterHomeText>
            <FilterHomeText>
              {">"}Home {">"} FAW
            </FilterHomeText>
          </FilterHome>
        </FilterContainer> */}

        <div style={{display:'flex',flexDirection:'column'}}>
          <LeftBar>
            <Filter>
              <Bar>
                <div style={{backgroundColor:'rgba(16, 103, 138, 0.933)',width:'50px',height:'50px'}}>
                <Category style={{color:'white',marginTop:'8px'}} />
                </div>
              <FilterTitle >
                PRODUCT CATEGORIES
              </FilterTitle>
              </Bar>
              <hr width="245px" style={{marginTop:'-2px'}} />
              <FilterText >
              {'>'}  Air Brake System
              </FilterText>
              
              <FilterText >
              {'>'} Clutch System
              </FilterText>
              
              <FilterText >
              {'>'} Suspension
              </FilterText>
              
              <FilterText >
              {'>'} Body Parts
              </FilterText>
              <FilterText >
              {'>'} Engine
              </FilterText>
              
              <FilterText>
              {'>'}  Brake
              </FilterText>
             
              <FilterText >
              {'>'} Clutch & FlyWheel
              </FilterText>
              <FilterText >
              {'>'} Engine
              </FilterText>
              <FilterText >
              {'>'} Axle & Trailer parts
              </FilterText>
              <FilterText >
              {'>'} Steering
              </FilterText>
              <FilterText >
              {'>'} Transmission
              </FilterText>
              <hr width="200px" />
            </Filter>
          </LeftBar>

          <SearchBar>
            <Filter>
              <Bar>
                <div style={{backgroundColor:'rgba(16, 103, 138, 0.933)',width:'50px',height:'50px'}}>
                <Category style={{color:'white',marginTop:'8px'}} />
                </div>
              <FilterTitle >
                SEARCH
              </FilterTitle>
              </Bar>
              <hr width="245px" style={{marginTop:'-2px'}} />
              <FilterText >
              Product Search
              </FilterText>
              <input type='text' className="form-control" placeholder="Enter OEM no, Chance no etc"
              style={{borderRadius:'8px',background:'whitesmoke',width:'220px',height:'40px',padding:'8px',marginLeft:'10px',marginTop:'10px'}}
              />
              <FilterText >
              Product Categories
              </FilterText>
              <select className="form-control"
               style={{borderRadius:'8px',background:'whitesmoke',width:'220px',height:'40px',padding:'8px',marginLeft:'10px', marginTop:'10px'}}
  
              >
                 <option>Air Brake System</option> 
                 <option>Suspension</option> 
                 <option>Body parts</option> 
                 <option>Engine</option> 
              </select>
              

              <FilterText >
              Vehicle
              </FilterText>
              <select className="form-control"
               style={{borderRadius:'8px',background:'whitesmoke',width:'220px',height:'40px',padding:'8px',marginLeft:'10px', marginTop:'10px'}}
  
              >
                 <option>BMW</option> 
                 <option>Toyota</option> 
                 <option>Honda</option> 
                 <option>MG</option> 
              </select>
              <button style={{marginBottom:'10px',height:'40px',width:'100px',marginLeft:'10px',marginRight:'auto',marginTop:'20px',backgroundColor:'rgba(16, 103, 138, 0.933)',color:'white'}}>Search</button>
              
            </Filter>
          </SearchBar>
          </div>
          <div style={{ margin:'70px'}}>
          <Productshow>
          <Div>
              
          </Div>
          <div style={{marginLeft:'40px',marginRight:'20px'}}>
          <TextField type='text' placeholder="Name"  style={{marginTop:'40px',marginBottom:'30px',width:'420px'}}
          InputProps={{
            endAdornment: (
              
                <IconButton>
                  <Person style={{marginTop:'0px'}}/>
                </IconButton>
             
            )
          }}
          />
          <TextField type='email' placeholder="Email"  style={{marginTop:'30px',marginBottom:'30px',width:'420px'}}
          InputProps={{
            endAdornment: (
              
                <IconButton>
                  <Email style={{marginTop:'0px'}}/>
                </IconButton>
            
            )
          }}
          />
           <TextField placeholder="Message"  style={{marginTop:'40px',marginBottom:'30px',width:'420px'}}
            
            InputProps={{
                endAdornment: (
                  
                    <IconButton>
                      <Message style={{marginTop:'0px'}}/>
                    </IconButton>
                
                )
              }}


           />
           <button style={{marginBottom:'30px',height:'40px',borderRadius:'50px',width:'300px',marginLeft:'60px',marginRight:'auto',marginTop:'30px',backgroundColor:'rgba(16, 103, 138, 0.933)',color:'white'}}>Send</button>
          </div>
         </Productshow>
</div>
</Container>
<Footer/>
</>
);
};
export default ContactUs;


const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const Div = styled.div`
  height:140px;
  background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmddZCBWW8fnRf125HbPUzEt74Q_Nlt_-mJA&usqp=CAU');
  width:500px;
  object-fit:fill;
  repeat:no repeat;
  
`;
const P= styled.p`
  font-weight:320;
`;
const Bar = styled.div`
   display:flex;
   width:245px;
   flex-direction:row;
   background-color:whitesmoke;
   //border-style:groove;
   border-bottom-color:whitesmoke;
  text-align: center;
`;


const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Filter = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: column;
  

  //height:40px;
  // background-color:white;
`;

const FilterHome = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  //height:40px;
`;
const Images = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  //height:40px;
`;
const LeftBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  
  border-color: whitesmoke;
  border-style: groove;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const SearchBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  margin-bottom:40px;
  border-color: whitesmoke;
  border-style: groove;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;
const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 16px;
  font-weight:350;
  padding: 8px;
  
  margin-left: 10px;
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding: 6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
`;
const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  padding: 4px;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  
  width:500px;
  
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-top:0px;
  display: flex;
  
  margin-left:150px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
display:flex;
flex-direction:row;

  width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

