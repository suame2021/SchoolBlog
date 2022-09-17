// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AlertComponent from './AlertComponent';
import loader from './logo.svg'
import { useParams } from 'react-router-dom';
import useFetch2 from './useFetch2';
// import imageFile from './images/Image-01.jpeg';
const PostDetailComponent = () => {
    const {id} = useParams();
    const {data:post, error, isPending} = useFetch2(`/blogs/${id}`)
    return (
        <div>
        <Row>
            <Col className='p-5'>
            { 
            post && <Card>
                <Card.Header as="h5">{post.title}</Card.Header>
                <Card.Body>
                    <Card.Title><small>{post.author}</small></Card.Title>
                    <Card.Text>
                       {post.body}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            }
            {isPending && <div><img src={loader} width="200" alt='preloader'/></div>}
            {error && <AlertComponent props={error} />}
            </Col>
            </Row>
            
        </div>
    );
}

export default PostDetailComponent;