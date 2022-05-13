import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL } from './App';
import CommentForm from './CommentForm';
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';

export default function RenderTrail() {
  const [trail, setTrail] = useState({})
  const { id } = useParams();
  const counter = useRef(0);

  useEffect(() => {
    fetch(`${URL}/${id}`)
    .then(r => r.json())
    .then(data => setTrail(data))
   }, [id])

  const handleClick = () => { 
    setTrail(prev => {
      return {...trail, likes: prev.likes + 1}
    })
  }

  const handleComments = (commentState) => setTrail({ ...trail, comments: [...trail.comments, commentState] })

  useEffect(() => {
    if (counter.current > 1) {
      fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(trail)
    })
    } else counter.current = counter.current + 1
  }, [id, trail])

  if(trail.comments === undefined) return <h1> Loading... </h1>
  const { name, likes, length, image, description, comments } = trail        

  return(
    <Container>
      <Card className='text-center' style={{ width: '100rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img src={image} /> 
          <Card.Text>
            {length} miles
          </Card.Text>
          <Card.Text>
            {description} 
          </Card.Text>
          <Button variant='primary'className='mb-2' onClick={handleClick}>
            {likes}  👍
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '100rem' }}> 
      <Card.Body>
        <CommentForm comments={comments} handleComments={handleComments} />
        {comments.length !== 0 ? 
          (
            <>
               <Card.Text className='mt-3'>
                 Comments:
               </Card.Text>
               <ul>
                 {comments.map((comment, index) => {
                   return <li key={index}>{comment}</li>;
                 })}
               </ul>
            </>
          ) : null
        }
      </Card.Body>
      </Card>
    </Container>
  )
}
