import React,{useEffect, useState} from 'react'
import { Link} from 'react-router-dom'

const Nav = (props) => {
  const [isLoggedIn,setLoggedIn] = useState(false);

  useEffect(()=>{
    setLoggedIn(props.loggedIn)
  },[props.loggedIn])
  
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href='#'>Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
     {!isLoggedIn && <li className="nav-item active">
        <Link className="nav-link" to={'/login'}>Login <span className="sr-only">(current)</span></Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/emplist'}>List Employees</Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/addemp'}>Add Employee</Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/profile'}>Profile</Link>
      </li>}
      {/* {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/parent'}>Parent</Link>
      </li>}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/child'}>Child</Link>
      </li>} */}
      {isLoggedIn && <li className="nav-item">
        <Link className="nav-link" to={'/logout'}>Log out</Link>
      </li>}
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Nav