import { useEffect, useState } from 'react'
import TrailItem from './TrailItem';
import Sort from './Sort';

export default function TrailList({ trails }) {
  const [renderedTrails, setRender] = useState([]);
  const [sort, setSort] = useState('default');

  const handleSetSort = (e) => setSort(e.target.value)
  
  useEffect(() => {
    sort === 'default' ?  setRender(trails) : setRender([...trails].sort((a, b) => a[sort] - b[sort]))
  }, [trails, sort])
  
    return (
      <div>
        <Sort 
            sort={sort} 
            handleSetSort={handleSetSort}  
            />
        {renderedTrails.map(trail => ( 
            <TrailItem 
                key={ trail.id }
                trail={ trail } 
            />
            ))}
      </div>
      )
  }
  
