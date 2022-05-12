import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { URL } from './App';
import Container from 'react-bootstrap/Container';

const emptyObj = 
  {
    name: '',
    image: '',
    description: '',
    length: '',
    comments: [],
    likes: 0
  }

export default function Form({ handleSetTrails }){
  const [formData, setFormData] = useState({...emptyObj});
  const history = useHistory();

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value }); 
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    }) 
    .then(r => r.json())
        .then(data => {
           handleSetTrails(data)
           history.push(`/traillist/${data.id}`)
        })

    setFormData({ ...emptyObj })
  }

    return (
      <Container>
         <form onSubmit={onFormSubmit}>
            <div className='form-group'>
               <label>Name of Trail: </label>
               <input 
                  type='text'
                  name='name'
                  value={formData.name} 
                  placeholder='...' 
                  onChange={handleFormChange}
                  className='form-control mb-3'
               />
               <label>Length of Trail: </label>
               <input 
                  type='number' 
                  name='length' 
                  value={formData.length} 
                  placeholder='...' 
                  onChange={handleFormChange}
                  className='form-control mb-3'
               />
              <label>Description of Trail: </label>
              <input 
                  type='text' 
                  name='description'  
                  value = {formData.description} 
                  placeholder='...' 
                  onChange={handleFormChange}
                  className='form-control mb-3'
              />
              <label>Map of Trail: </label>
              <input 
                  type='text' 
                  name='image' 
                  value={formData.image} 
                  placeholder='...' 
                  onChange={handleFormChange}
                  className='form-control mb-3'
              />
               <button 
                  type='submit' 
                  className='btn btn-light'>
                     submit
               </button>
            </div>
         </form>
   </Container>
    )
  }
  
