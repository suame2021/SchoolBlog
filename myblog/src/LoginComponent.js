import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import api from './api'
const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
    error_list: []
  });
  const history = useHistory();
  const [isPending, setIsPending] = useState(true)
  const handleInput = (e) => {
    e.persist()
    setLoginDetails({
      ...loginDetails, [e.target.name]: e.target.value
    })
  }


  const data = {
    email: loginDetails.email,
    password: loginDetails.password
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = async () => {
      try {
        const response = await api.post('/login', data)
          .then(res => {
            // //console.log(res.data.validation_errors);
            if (res.data.status === 200) {

              localStorage.setItem('token', res.data.token);
              localStorage.setItem('username', res.data.user);
              swal("Success", res.data.message, "success")
              history.push('/create')

            } else if (res.data.status === 401) {
              swal("Login Invalid", res.data.message, "error")
            }
            else {
              const emailError = res.data.validation_errors.email[0] ?
              res.data.validation_errors.email[0] : '';
              const passwordError = res.data.validation_errors.password[0] ?
              res.data.validation_errors.password[0] : ' ';
              const totalError = emailError + passwordError;

              swal("Login Invalid", totalError, "error");
              setLoginDetails({
                
                ...loginDetails, error_list: res.data.validation_errors
              })
            }
          })
      } catch (error) {
        swal("Request not Performed", error.message, "error")
      }
    }
    login();





  }

  return (
    <Row className='pt-5'>
      <Col md={{ span: 6, offset: 3 }} sm={12} >
        <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter username" name="email" value={loginDetails.email} onChange={handleInput} />
                <Form.Text className="text-danger"> {loginDetails.error_list.email}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" name="password" value={loginDetails.password} onChange={handleInput} />
                <Form.Text className="text-danger"> {loginDetails.error_list.password}
                </Form.Text>
              </Form.Group>


              {isPending && <Button variant="primary" type="submit">
                Submit
              </Button>}
              {!isPending && <Button variant="primary" type="submit" disabled>
                Submitting the Blog <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </Button>}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;