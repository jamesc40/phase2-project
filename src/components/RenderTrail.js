import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL } from './App';
import CommentForm from './CommentForm';

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

         function handleComments(commentState) {
          setTrail({ ...trail, comments: [...trail.comments, commentState] });
         }

         // patches  updated trail to backend
         useEffect(() => {
             handlePatch({ comments: trail.comments });
         }, [trail.comments]);

        const { name, likes, length, image, description, comments } = trail        
        
         return(
                <div>
                        <h1>{name}</h1>
                        <img src={image} alt={name} className='map'/>
                        <p>Length: {length} miles</p>
                        <p>Description: {description}</p>
                        <button onClick={handleClick}>Likes: {likes}</button>
                        <p>Comments:</p>
                         <ul>
                             {comments !== undefined
                                    ? comments.map((comment, index) => {
                                       return <li key={index}>{comment}</li>;
                                       })
                              : null}
      </ul>
      <CommentForm comments={comments} handleComments={handleComments} />

                </div>
         )
}
