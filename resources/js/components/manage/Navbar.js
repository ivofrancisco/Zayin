import '../../assets/manage/sass/Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="g-navbar">
            {/* Begin: g-wrapper */}
            <div className="g-wrapper">
                <ul>
                    <li>
                        <NavLink exact to="/galleries" activeClassName="active">Galleries</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" activeClassName="active">Add Gallery</NavLink>
                    </li>
                </ul>
            </div>
            {/* End: g-wrapper */}
        </div>
     );
}
 
export default Navbar;