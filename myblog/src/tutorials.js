import Button from "react-bootstrap/Button";
import { useRef, useState, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";

const TutorialComponent = () => {

  
  console.log(Date.now)
  const initialState = [
    { id: Date.now(), name: "Daniel", email: "dan@emmi.outlook" },
    { id: Date.now() + 1, name: "Kingsley", email: "andre@emmi.outlook" }
  ];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addContact = (e) => {
      e.preventDefault();
      const contact = {
        id: Date.now(),
        name,
        email
      }

      setName('');
      setEmail('');
      dispatch({ type : "add", body: contact}) 
  }

  function reducer(state, action) {
    switch (action.type) {
      case "add":
       return [...state, action.body]
      case "delete":
       return state.filter(
        contact =>{
          return contact.id !== action.body.id
        }
       )


      default:
        throw new Error();
    }
  }



  return (
    <div className="container p-5">
      <Row>
       



        <Col md={{ span: 6, offset: 3 }}>
          <form onSubmit={addContact}>
            <input type="text" value={name} onChange={
              (e) => setName(e.target.value)
            } className="form-control m-3" placeholder="Enter Your Name" />
            <input type="email" value={email} onChange={
              (e) => setEmail(e.target.value)
            } className="form-control m-3" placeholder="Enter Your Email" />
            <button className="btn btn-success m-3">Add New Contact</button>
          </form>

          <div>
            <ul>
              {state.map(
                contact => {
                  return (
                    <li key={contact.id}>
                      <p>{contact.name}</p>
                      <small>{contact.email}</small>
                      <br/>
                      <button className="btn btn-danger" onClick={
                        ()=> dispatch(
                          { type: 'delete',
                        body : {id: contact.id }}
                        )
                      }>
                          Delete Contact
                      </button>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TutorialComponent;