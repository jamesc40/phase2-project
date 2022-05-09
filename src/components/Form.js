import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { URL } from './App';

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
    .then(handleSetTrails)

    setFormData({ ...emptyObj })
  }

    return (
      <div>
	<form onSubmit={onFormSubmit}>
	  <label>Name of Trail: </label>
	  <input 
	  	type='text'
	  	name='name'
	  	value={formData.name} 
	  	placeholder='name of trail' 
	  	onChange={handleFormChange}
	  />
	  <br /><br />

	  <label>Length of Trail: </label>
	  <input 
	  	type='number' 
	  	name='length' 
	  	value={formData.length} 
	  	placeholder='length of trail' 
	  	onChange={handleFormChange}
	  />
	  <br /><br />

	  <label>Description of Trail: </label>
	  <input 
	  	type='text' 
	  	name='description'  
	  	value = {formData.description} 
	  	placeholder='description' 
	  	onChange={handleFormChange}
	  />
	  <br /><br />
		  
	  <label>Map of Trail: </label>
	  <input 
	  	type='text' 
	  	name='image' 
	  	value={formData.image} 
	  	placeholder='image goes here' 
	  	onChange={handleFormChange}
	  />
	  <button type='submit'>submit</button>
	</form>
      </div>
    )
  }
  
