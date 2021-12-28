import {Form, Button, Row, Col} from "react-bootstrap"
export default function Formulario() {
    return (
        <div>
            <Form className="bg-dark text-light p-5">
                <Row className="mb-3 justify-content-center">
                    <Form.Label className="text-form-p fs-5 fw-bold text-center">¿TIENES CÓDIGO DE INVITACIÓN?</Form.Label>
                        <Col xs={6} className="col-auto">
                            <Form.Control className="fw-bold" type="email" placeholder="CÓDIGO" />
                        </Col>
                        
                        <Col className="col-auto">
                            <Button className="boton-crear" variant="danger">
                                START
                            </Button> 
                        </Col>
                </Row>
                <hr className="my-5"></hr>

                <Row className="mb-3 justify-content-center">
                    <Form.Label className="fs-5 fw-bold text-center">SI NO TIENES CODIGO PERO TE INTERESA HACER TU CV DEPORTIVO, DÉJANOS
                        TU CORREO Y PRONTO PODRÁS SER PARTE DE LA COMUNIDAD DEPORTIVA. </Form.Label>
                        <Col sm={8} className="my-2 text-center">
                            <Form.Control type="email" placeholder="CORREO (Me interesa)" className="text-center"/>
                            <Button className="boton-crear mt-4" variant="danger">
                                ENVIAR
                            </Button>
                        </Col>
                </Row>
            </Form>
            
        </div>
    )
}
