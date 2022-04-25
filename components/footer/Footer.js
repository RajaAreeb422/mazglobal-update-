import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import {
	Search,
	ShoppingCartOutlined,
	LocalShippingOutlined,
	SupervisedUserCircleOutlined,
	LockRounded,
	Phone,
	LocationCity,
	WhatsApp,
	Email
  } from "@material-ui/icons";
import Link from "next/link";
import styled from "styled-components";
const Footer = () => {
	useEffect(() => {
		// alert('Finished loading');
	  }, []);
return (

	<Box>
	<Container>
		<Row>

		<Column>
		<Image  height='250px' width='200px' src='/Maz Global Logo-02.png'/>
		</Column>	
	
		<Column>
			<Heading style={{marginLeft:'0px',fontWeight:'500'}}>Send Feedback</Heading>
			<Input type='text' placeholder="Name"></Input>
			<Input type='email' placeholder="Email"></Input>
			<Textarea placeholder="Message"></Textarea>
            <Button>Submit</Button>
		</Column>
		<Column>
			{/* <Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink> */}

			<Heading style={{fontWeight:'500'}}>Contact Us</Heading>
			<FootLink href="#"><WhatsApp/>    +090078601</FootLink>
			<FootLink href="#"><Email/>        customercare@pernia.pk</FootLink>
			
			<Heading style={{marginTop:'20px',fontWeight:'500'}}>Customer Services</Heading>
			<FootLink  ><Link href='/SellAt' as={`/SellAt`}><PP>Terms and Conditions</PP></Link></FootLink>
			<FootLink><Link href='/Connect_With_Us' as={`/Connect_With_Us`} ><PP>Connect with us</PP></Link></FootLink>
		</Column>
		{/* <Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<img src="./fb.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./you.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./insta.svg" alt="" style={{ width: "30px" ,marginLeft:'20px'}} />
				</span>
			</i>
			</FooterLink>
			
		</Column> */}

<Column style={{marginTop:'0px', marginLeft:'20px'}}>
			{/* <Heading>About Us</Heading> */}
			
			<FootLink ><Link href='/SellAt' as={`/SellAt`}><Phone style={{fontSize:'38px'}}/></Link></FootLink>
			<FootLink ><p style={{color:'rgba(16, 103, 138, 0.933)',fontSize:'14px'}}>Phone us on</p></FootLink>
			<FootLink > +44 (0)20 86542 7567</FootLink>
			<FootLink > <Link href='/Rewards' as={`/Rewards`}><LocationCity style={{fontSize:'38px',marginTop:'20px'}}/></Link></FootLink>
			<FootLink ><p style={{color:'rgba(16, 103, 138, 0.933)',fontSize:'14px'}}>Bahria Town Phase |||</p></FootLink>
			<FootLink ><p style={{color:'rgba(16, 103, 138, 0.933)',fontSize:'14px',marginTop:'-6px'}}>Street 1963</p></FootLink>
		</Column>
		</Row>
	</Container>
	
	<div style={{borderTop:'1px solid white',
				backgroundColor:'black',
				paddingBottom: "10px",
				marginBottom:'-18px',
				paddingTop: "10px"}}>
	<span style={{ color: "white",
				textAlign: "left",
				paddingBottom: "10px",
				marginLeft:'20px',
				paddingTop: "10px", }}>
		©️ 2022 MazGlobal. All Rights Reserved.
	</span>
	<span style={{ color: "white",
				float:'right',
				marginRight:'20px' }}>
		Term of Sale Terms | Conditions Privacy | Cookie Disclaimers

	</span>
	</div>
	</Box>
	
);
};
export default Footer;

const PP=styled.p` 
text-decoration:none;
cursor:pointer;
color:rgba(16, 103, 138, 0.933);
margin-top:0px;
`

const FootLink=styled.div`
 text-decoration:none;
 padding-left:40px;
 margin-top:10px;
 color:rgba(16, 103, 138, 0.933);
`
const Input=styled.input`
 width:200px;
 padding:6px ;
 border-color:rgba(16, 103, 138, 0.933);
 color:white;
 border-radius:8px;
 margin-bottom:4px;
`

 const Button=styled.button`
 width:100px;
 padding:6px ;
 color:white;
 border-radius:8px;
 background-color:rgba(16, 103, 138, 0.933);
`


const Textarea=styled.textarea`
  width:200px;
 padding:6px ;
 color:white;
 border-color:rgba(16, 103, 138, 0.933);
 border-radius:8px;
 margin-bottom:4px;
`

