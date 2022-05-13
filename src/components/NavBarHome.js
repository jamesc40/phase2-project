import { Link } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
//
export default function NavBarHome() {
  return (
    <nav className='navbar navbar-light bg-light'>
      <form className='form-inline'>
        <Link to='/traillist'>
          <button id='home-btn' className='btn btn-outline-success' type='button'>
           {/*<FormatListBulletedIcon fontSize='large' className='home-icon' />
            {'  '} See the list of trails*/}
            List of Trails
          </button>
        </Link>
        <Link to='/form'>
          <button id='home-btn' className='btn btn-outline-success' type='button'>
            {/*<AddIcon fontSize='large' className='home-icon' />
            {' '} Add a new trail*/}
            Add a New Trail
          </button>
        </Link>
      </form>
    </nav>
  );
}
