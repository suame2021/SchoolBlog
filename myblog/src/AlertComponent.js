import Alert from 'react-bootstrap/Alert';

function AlertComponent({props}) {
  return (
  
      
        <Alert variant="warning" >
          {props}
        </Alert>
     
  );
}

export default AlertComponent;