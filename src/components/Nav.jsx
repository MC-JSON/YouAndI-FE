import { Link } from 'react-router-dom'

//navigation bar built
const Nav = (props) => {
  return (
    <header>
      <nav className='navbar'>
        <div>
          <Link to="/">Home</Link>
          <Link to="/pottery">About</Link>
          <Link to="/types">Categorical</Link>
          <Link to='/create'>Create</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav