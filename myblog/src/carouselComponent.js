import Carousel from "react-bootstrap/Carousel";
import slider1 from './images/slider1.jpeg'
import Slider2 from './images/Slider2.jpg'
import Slider3 from "./images/Slider3.jpg"

const CarouselComponent = () => {
    return (
      <Carousel className="sliderHeight">
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src=".Images/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="sliderText">Our School Environment</h3>
            <p className="sliderText"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sliderHeight">
          <img className="d-block w-100" src={Slider3} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="sliderText">Our Students</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sliderHeight">
          <img className="d-block w-100" src={Slider2} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="sliderText">Our Campus</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
 
export default CarouselComponent;