import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL } from './App';

export default function RenderTrail() {
         const { id } = useParams();
         const [trail, setTrail] = useState()
  
         useEffect(() => {
                fetch(`${URL}/${id}`)
                .then(r => r.json())
                .then(data => setTrail(data))
         }, [id])
        
        if(!trail) return <h1>Loading...</h1>

        const { name, likes, length, image, description, comments } = trail        

        const handleSetTrail = (updatedTrail) => setTrail(updatedTrail)

        const handleClick = () => { 
                setTrail(prev => {
                        return {...trail, likes: prev.likes + 1}
                        handlePatch()
                })
        }

       // useEffect(() => {
       //         fetch(`${URL}/${id}`, {
       //         method: 'PATCH',
       //         headers: {
       //                 'content-type': 'application/json'
       //         },
       //         body: JSON.stringify({ likes: 1000000 })
       //         })
       //         .then(r => r.json())
       //         .then(data => console.log(data))
       // }, [trail.likes])


        const handlePatch = () => {
                console.log(likes)
                fetch(`${URL}/${id}`, {
                        method: 'PATCH',
                        header: {
                        'content-type': 'application/json'
                }, 
                        body: JSON.stringify({ likes: likes })
                        })
                .then(r => r.json())
                .then(data => console.log(data))
        } 
        
                  
         return(
           <div>
             <h1>{name}</h1>
             <img src={image} alt={name} className='map'/>
             <p>Length: {length} miles</p>
             <p>Description: {description}</p>
             <button onClick={handleClick}>Likes: {likes}</button>
             <p>Comments:</p>
           </div>
         )
}
