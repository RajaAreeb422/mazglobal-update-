import { sliderItems } from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import { mobile } from "../pages/responsive";
import Link from "next/link";


const Slider = () => {
  // const [slideIndex, setSlideIndex] = useState(0);
  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //   }
  // };

  return (
    
    <Carousel>
                  <div>
                      <img src="https://www.chanceparts.com/Uploads/flash/61cab964353fc.jpg" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="https://www.chanceparts.com/Uploads/flash/61cab964353fc.jpg" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="https://www.chanceparts.com/Uploads/flash/61cab964353fc.jpg" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  
              </Carousel>

  );
};

export default Slider;


// const Container = styled.div`
//   width: 100%;
//   overflow: hidden;
//   display:flex;
//   flex-direction:row;
//   height:75vh;
//   `;
  /* ${mobile({ display: "none" })} */

  // <Container>
    //   <Arrow direction="left" onClick={() => handleClick("left")}>
    //     <ArrowLeftOutlined />
    //   </Arrow>
    //   <Wrapper slideIndex={slideIndex}>
    //     {sliderItems.map((item) => (
    //       <Slide bg={item.bg} key={item.id}>
    //         <ImgContainer style={{width:'12%'}}>
    //           <Image src={item.img} />
    //         </ImgContainer>
           
    //       </Slide>
    //     ))}
    //   </Wrapper>
    //   <Arrow direction="right" onClick={() => handleClick("right")}>
    //     <ArrowRightOutlined />
    //   </Arrow>
    // </Container>