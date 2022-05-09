export default function Sort({ sort, handleSetSort }){

    return (
      <form>
        <label>Default</label>
        <input 
            type='radio' 
            name='sort' 
            value='default' 
            checked={sort === 'default'} 
            onChange={handleSetSort}
        />
        <br />
        <label>Sort by Likes</label>
        <input 
            type='radio' 
            name='sort' 
            value='likes' 
            checked={sort === 'likes'} 
            onChange={handleSetSort}
        />
        <br />
        <label>Sort by Distance</label>
        <input 
            type='radio' 
            name='sort' 
            value='length' 
            checked={sort === 'length'} 
            onChange={handleSetSort} 
        />
        <br />
      </form>
    )
  }
  
  