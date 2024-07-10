import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            <h4>Water Intake Tracker</h4>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                    <NavLink to={"/add-water-intake"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>Add Water Intake</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/view-water-intake"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>Water Intake List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink onClick={handleLogout} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>Logout</NavLink>
                </li>
            </ul>
       </div>
    </nav>
  )
}

export default Navbar;