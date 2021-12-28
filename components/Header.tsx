import {Container} from "react-bootstrap"
import {Navbar, Button} from "react-bootstrap"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Image
                            src="/img/logo2.png"
                            width={150}
                            height={60}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>  
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                </Container>
            </Navbar>

            <section className="bg-dark text-light p-5 text-center text-sm-start">
                <Container >
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1 className="principal">TEXTO PRINCIPAL LANDING PAGE QUONEEK</h1>
                            <p className="texto pb-4">Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                            <Button className="boton-crear" variant="danger" >CREAR MI CV DEPORTIVO</Button>{' '}
                        </div>
                        <img className="img-fluid w-50" src="/img/CV2.png"/>
                    </div>
                </Container>
            </section>
        </div>
    )
}