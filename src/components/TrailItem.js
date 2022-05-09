export default function TrailItem({ trail }) {
    const { name, image } = trail 
    
      return(
        <div>
            <h1>{ name }</h1>
            <img className='map' src={ image } alt={ name } />
        </div>
      )
  }
  