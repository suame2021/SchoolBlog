import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SubmissionForm = () => {
    return ( 
        <Form>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='text-white'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-light">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
     );
}
 
export default SubmissionForm;