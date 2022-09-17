import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import imageFile from './images/Image-01.jpeg';
import { Link } from 'react-router-dom';
import api from './api';
import swal from 'sweetalert'

const PostComponent = ({posts}) => {
  // const history= useHistory();
  const loggedin= localStorage.getItem('token');
  const author= localStorage.getItem('username');
  const refreshPage =() => {
    window.location.reload(false);
   }
  
  const deletePost = async (id, author) =>{
    
    const data={
      author
    }
    try {
        await api.delete(`/delete-blog/${id}`, { data : data}).then(
          res => {
            if(res.data.status === 200){
              swal("Created Successfully ", res.data.message, "success");
              refreshPage();
            }
            else if(res.data.status === 403)
            {
              swal("Abeg Abeg Abeg", res.data.message, "warning");
            }
          }
        )
       
    } catch (err) {
      console.log(err.message)
    }
    
  }
  return (
          <Row>
            {/* <h2>{name}</h2> */}
             
                          {
              posts.map(
                (post) => (

                  <Col xs={12} md={4} lg={3} key={post.id}>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                      <Card.Img variant="top" src={imageFile} />
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <small>Written by {post.author}</small>
                        <Card.Text>
                          {post.body.substring(0,100)}.....
                        </Card.Text>
                        < Link to={`/posts/${post.id}`}>
                        <Button variant="outline-primary">Read More</Button>
                        </Link>
                        { loggedin && <Button variant="danger" onClick={()=>deletePost(post.id, author)}>Delete Post
                        </Button> }
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )
            } 
  </Row>
     );
}

export default PostComponent;