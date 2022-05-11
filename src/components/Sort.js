export default function Sort({ sort, handleSetSort }){
    return (
      <div className='form-check mb-4'>
         <input 
            type='radio' 
            name='sort' 
            value='default' 
            checked={sort === 'default'} 
            onChange={handleSetSort}
            className='form-check-input'
         />
         <label className='form-check-label ml-4'>Default</label>
         <br />
         <input 
            type='radio' 
            name='sort' 
            value='likes' 
            checked={sort === 'likes'} 
            onChange={handleSetSort}
            className='form-check-input'
         />
         <label className='form-check-label ml-4'>Sort by Likes</label>
         <br />

         <input 
            type='radio' 
            name='sort' 
            value='length' 
            checked={sort === 'length'} 
            onChange={handleSetSort} 
            className='form-check-input'
         />
         <label className='form-check-label ml-4'>Sort by Distance</label>
      </div>
    )
  }
