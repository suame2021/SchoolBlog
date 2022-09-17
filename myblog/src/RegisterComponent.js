import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from './api';
import axios from 'axios';
import swal from 'sweetalert'
const Register = () => {

  const [registerDetails, setRegisterDetails] = useState({
              name: '',
              email : '',
              password: '',
              error_list : []
            });
  
  const handleInput = (e) => {
    e.persist();
    setRegisterDetails({
      ...registerDetails, [e.target.name] : e.target.value
    })
  }
  

  const [isPending, setIsPending]= useState(true)
  const history = useHistory();

  

  

 const handleSubmit = (e) => {
  e.preventDefault();  
  const data = {
    name: registerDetails.name,
    email: registerDetails.email,
    password: registerDetails.password,
  }
//   setIsPending(false)
    const register = async() => {
        try {

          
            const response = await api.post('/register', data).then(
              res => {
                if(res.data.status === 200){
                  // console.log(res.data)
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('username', res.data.user);
                    swal("Success", res.data.message, "success")
                    history.push('/create')
                }
                else{
                  setRegisterDetails({
                    ...registerDetails, error_list: res.data.validation_errors
                  })
                }
              }
            )
          
          
            // history.push('/login')
        } catch (error) {
            // console.log(error.response.data)
        }
    }
    register();
 

    

    
  
 }
 
  return (
    <Row className='pt-5'>
      <Col md={{ span: 6, offset: 3 }} sm={12} >
        <h1>Register Here</h1>
        <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" 
                name="name" value={registerDetails.name} onChange={handleInput}/>
                <Form.Text className="text-danger">{registerDetails.error_list.name}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="Enter Email" value={registerDetails.email} onChange={handleInput} />
                <Form.Text className="text-danger">{registerDetails.error_list.email}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" name="password" value={registerDetails.password} onChange={handleInput}/>
                <Form.Text className="text-danger">{registerDetails.error_list.password}
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

export default Register;