import Logo from '../../asset/img/logo/logo.png'
import {BsCart4, BsPersonCircle} from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const NavStyle = ({isActive}) => {
        return {
            color: isActive ? '#1f1f1f' : '#101010'
        }
    }

    
    return (
        <div>
            {/* Navigasi Start */}
            <nav className="navbar navbar-expand-lg p-2" style={{backgroundColor:"white"}}>
                <div className="container">
                <div className="gambar-restoran">
                    <img src={Logo} className="card-img" alt="..." height="60px"/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <NavLink style={NavStyle} className="nav-link fw-bold" aria-current="page" to="/">BERANDA</NavLink>
                    <NavLink style={NavStyle} className="nav-link fw-bold" to="/menu">MENU MAKANAN</NavLink>
                    <NavLink style={NavStyle}  className="nav-link fw-bold" to="/login">MASUK</NavLink>
                    </div>
                    <div className="d-flex align-content-center text-start m-lg-3">
                    <NavLink to="/cart" >
                        <BsCart4 size={28} color="101010" />
                    </NavLink>
                    </div>
                    <div className="dropdown text-start">
                    <NavLink to="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                       <BsPersonCircle size={28} color='#101010'/>
                    </NavLink>
                    <ul className="dropdown-menu text-small" style={{color: "#101010", fontSize: "12px"}}>
                        <li><Link className="dropdown-item" to="/user">User</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/">Keluar</Link></li>
                    </ul>
                    </div>

                </div>
                </div>
            </nav>
            {/* Navigasi End */}
        </div>
    )
}

export default Navbar;