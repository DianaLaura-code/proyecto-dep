import { Carousel, Container} from "react-bootstrap";
export default function Slider() {
    return (
        <div className="px-2 py-5  text-center">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/img2.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/img/img3.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/img/img2.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
