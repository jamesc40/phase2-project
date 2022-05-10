import { Link } from 'react-router-dom'
export default function TrailItem({ trail }) {
    const { id, name, image } = trail 
    
      return(
        <div>
                <Link to={`/traillist/${id}`}>
                        <h1>{ name }</h1>
                </Link>
                <img className='map' src={ image } alt={ name } />
        </div>
      )
  }
  
