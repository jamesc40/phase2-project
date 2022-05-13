import Card from "react-bootstrap/Card";

export default function TrailItem({ trail }) {
  const { id, name, image } = trail 
    
  return(
   <div className='col'>
      <Card style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title>{ name }</Card.Title>
          <Card.Img src={ image } /> 
          <Card.Link href={`/traillist/${id}`}>Learn More</Card.Link>
        </Card.Body>
      </Card>
   </div>
  )
}
  
