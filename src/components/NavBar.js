import { NavLink } from 'react-router-dom';

export default function NavBar() {
  
  return ( 
    <nav>
	<ul> 
	  <li>
	    <NavLink to='/traillist'>
	      Trail List
	    </NavLink>
	  </li>

	  <li>
	    <NavLink to='/form'>
	      Form
	    </NavLink>
	  </li>
	</ul>
    </nav> 
  )
}
