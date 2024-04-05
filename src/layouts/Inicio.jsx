import {Container, Row, Col} from 'react-bootstrap';
import { Emoji } from 'emoji-picker-react';
const Inicio = () => {

    return(
        <>
         <Container className="text-center my-5">
      <Row>
        <Col><h1>Bienvenido a Happy Cake</h1>
            <h5>El ligar de los pasteles felices</h5>
            <Emoji unified="1f382" size="45" />
            </Col>
      </Row>
    </Container>
       
        </>
    )

}

export default Inicio