import {Container, Row, Col} from 'react-bootstrap';
import { Emoji } from 'emoji-picker-react';

const NotFound = () => {

    return(
        <>
         <Container className="text-center my-5">
      <Row>
        <Col><h1>OPPS!!</h1>
            <h2>Página no encontrada</h2>
            <Emoji unified="1f62c" size="55" />
            </Col>
      </Row>
    </Container>
        </>
    )

}

export default NotFound