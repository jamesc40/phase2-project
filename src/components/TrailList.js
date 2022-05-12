import { useEffect, useState } from 'react'
import TrailItem from './TrailItem';
import Sort from './Sort';
import Container from 'react-bootstrap/Container';

export default function TrailList({ trails }) {
   const [renderedTrails, setRender] = useState([]);
   const [search, setSearch] = useState('');
   const [sort, setSort] = useState('default');

   const handleSetSort = (e) => setSort(e.target.value)

   const handleSearch = (e) => setSearch(e.target.value);
  
   useEffect(() => {
      let searchArr = trails.filter(trail => trail.name.toLowerCase().includes(search.toLowerCase()))
      let row = []
      let tempArr = sort === 'default' ?  searchArr : [...searchArr].sort((a, b) => b[sort] - a[sort])
      let mapArr = tempArr.map((trail, index) => (<TrailItem key={trail.id} trail={trail}/>))
      while (mapArr.length > 0) {
        row.push(<div className='row' key={mapArr.length}>{mapArr.splice(0, 2)}</div>)
      } setRender(row)
   }, [trails, search, sort])

   return (
       <Container>
         <Sort 
            search={search}
            sort={sort} 
            handleSearch={handleSearch}
            handleSetSort={handleSetSort}  
         />
            {renderedTrails}
      </Container>
      )
  }
 
