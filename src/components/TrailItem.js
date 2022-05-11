//import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";

export default function TrailItem({ trail }) {
    const { id, name, image } = trail 
    
      return(
       // <div>
       //         <Link to={`/traillist/${id}`}>
       //                 <h1>{ name }</h1>
       //         </Link>
       //         <img className='map' src={ image } alt={ name } />
       // </div>
      <Card style={{ width: '50rem' }}>
         <Card.Body>
            <Card.Title>{ name }</Card.Title>
            <Card.Img src={ image } /> 
            <Card.Link href={`/traillist/${id}`}>Learn More</Card.Link>
         </Card.Body>
      </Card>
      )
  }
  
