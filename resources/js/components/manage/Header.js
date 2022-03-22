import Topbar from './Topbar';
import Navbar from './Navbar';
import '../../assets/manage/sass/Header.scss';


const Header = () => {
    return ( 
        <div className="g-header">
            <Topbar />
            <Navbar />
        </div>
     );
}
 
export default Header;