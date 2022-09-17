import Image404 from './404.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return ( 
        <Row>
            <Col className='p-5'>
             <Card>
                <Card.Header as="h5">Page Not Found</Card.Header>
                <Card.Body>
                    <Card.Title><small>Are you lost?</small></Card.Title>
                    <Card.Text>
                      <h1>404</h1>
                      <img src={Image404} className="image-fluid p-3" alt="404" width={300}/>
                    </Card.Text>
                    <Link to="/">
                        <Button variant="primary">Go Back Home</Button>
                    </Link>
                </Card.Body>
            </Card>
            
           
            </Col>
            </Row>
     );
}
 
export default Error404;