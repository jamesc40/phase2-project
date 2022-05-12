import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL } from './App';
import CommentForm from './CommentForm';
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';

export default function RenderTrail() {
         const { id } = useParams();
         const [trail, setTrail] = useState({})
  
         useEffect(() => {
                fetch(`${URL}/${id}`)
                .then(r => r.json())
                .then(data => setTrail(data))
         }, [id])

        const handleSetTrail = (updatedTrail) => setTrail(updatedTrail)

        const handleClick = () => { 
                setTrail(prev => {
                        return {...trail, likes: prev.likes + 1}
                })
        }

        useEffect(() => {
                handlePatch({ likes: trail.likes });
       }, [trail.likes])

        const handlePatch = (update) => {
                fetch(`${URL}/${id}`, {
                        method: 'PATCH',
                        headers: {
                                'content-type': 'application/json'
                        },
                        body: JSON.stringify(update)
                })
        }

         // 2. FORM RELATED THINGS
         // updates trail’s comment key via commentState

         const handleComments = (commentState) => setTrail({ ...trail, comments: [...trail.comments, commentState] })

         // patches  updated trail to backend
         useEffect(() => {
             handlePatch({ comments: trail.comments });
         }, [trail.comments]);

        const { name, likes, length, image, description, comments } = trail        
        
         return(
                <Container>
                        <Card className='text-center' style={{ width: '100rem' }}>
                           <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Img src={image} /> 
                              <Card.Text>
                                 {length} miles
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
                              <Card.Text className='mt-3'>
                                 {comments !== undefined ? 'Comments:' : null}
                              </Card.Text>
                              <ul>
                                {comments !== undefined
                                 ? comments.map((comment, index) => {
                                    return <li key={index}>{comment}</li>;
                                    })
                                 : null}
                              </ul>
                           </Card.Body>
                        </Card>
                </Container>
         )
}
