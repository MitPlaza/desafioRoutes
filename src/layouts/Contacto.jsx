import {Container, Row, Col, Form, Button} from 'react-bootstrap';
const Contacto = () => {

    return(
        <>
             <Container className="text-center my-5">
      <Row>
        <Col><h1>Cuéntanos, ¿en qué podemos ayudarte?</h1>
        <Form className='my-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button className='btn' size="lg">Enviar</Button>
    </Form>
            </Col>
      </Row>
    </Container>
        </>
    )

}

export default Contacto