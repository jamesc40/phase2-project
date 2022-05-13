import NavBarHome from './NavBarHome'

export default function Home() {
  return (
    <div className='bg d-flex align-items-center justify-content-center'>
      <div id='intro-parent-div' className='col align-items-center'>
        <div id='intro-div' className='col text-center'>
          <p id='intro-p'>
            Welcome to James and Dan’s trail finder. We’ve compiled a list of
            popular long-distance hiking trails and relevant details about
            each one.
          </p>
        </div>
        <div id='NavBarContainer' className='col'>
          <NavBarHome />
        </div>
      </div>
    </div>
  );
}
