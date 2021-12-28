import Link from "next/link";
import { Container, Row } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faYoutube, faTumblr, faFacebook, faInstagram, faTwitter, faDiscord} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div>
            <footer className="text-white py-4 bg-dark my-5 px-5">
                <Container className="mt-4">
                    <nav className="row">
                            <div className="col-12 col-md-6 mx-auto mt-3">
                                <Link href="/">
                                    <img src="./img/logo2.png" className="" width="250" height="100"/>
                                </Link>
                                <hr className="mt-5 w-100 "/>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            
                            
                            <ul className="col-12 col-md-3 list-unstyled mx-auto mt-3 ">
                                <li className=" mb-4 fw-bold">LOREM IPSUM</li>
                                <li>Lorem ipsum</li>
                                <li>Dolor sit ametC</li>
                                <li>Consectetuer</li>
                                <li>Adipiscing elit</li>
                                <li>Sed diam nonummy</li>
                                <li>Nibh euismod</li>
                            </ul>

                            <ul className="col-12 col-md-3 list-unstyled mx-auto mt-3">
                                <li className="mb-4 fw-bold ">LOREM IPSUM</li>
                                <li>Lorem ipsum</li>
                                <li>Dolor sit ametC</li>
                                <li>Consectetuer</li>
                                <li>Adipiscing elit</li>
                                <li>Sed diam nonummy</li>
                                <li>Nibh euismod</li>
                            </ul>
                    </nav>

                    <section className="p-3 pt-0 row-iconos">
                        <div className="col-md-12  text-center text-md-center pt-5">

                            <a className="btn btn-outline-light btn-floating m-1" role="button">
                            <Link href="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                </Link>
                            </a>

                            <a className="btn btn-outline-light btn-floating m-1" role="button">
                            <Link href="/">
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                </Link>
                            </a>

                            <a className="btn btn-outline-light btn-floating m-1" role="button">
                            <Link href="/">
                                <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
                                </Link>
                            </a>
                            

                            <a className="btn btn-outline-light btn-floating m-1" role="button">
                            <Link href="/">
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </Link>
                            </a>

                            <a className="btn btn-outline-light btn-floating m-1" role="button">
                            <Link href="/">
                                <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                                </Link>
                            </a>

                            <a className="btn btn-outline-light btn-floating m-1" role="button">
                            <Link href="/">
                                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                </Link>
                            </a>
                         </div>

                         <div className="col-md-12  text-center text-md-center pt-3">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         </div>
                    </section>
                </Container>
            </footer>
        </div>
    )
}
