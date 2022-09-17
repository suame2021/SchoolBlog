import Carousel from "react-bootstrap/Carousel";
import slider1 from './images/slider1.jpeg'

const CarouselComponent = () => {
    return ( 
        <Carousel className="sliderHeight">
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="sliderText">First slide label</h3>
            <p className="sliderText">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src={slider1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="sliderText">Second slide label</h3>
            <p className="sliderText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src={slider1}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className="sliderText">Third slide label</h3>
            <p className="sliderText">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     );
}
 
export default CarouselComponent;