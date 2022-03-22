import { Link } from "react-router-dom";
import '../../assets/manage/sass/Topbar.scss';

import Image from "../commons/Image";

const Topbar = () => {
    return ( 
        <div className="g-topbar">
            {/* Begin: g-wrapper */}
            <div className="g-wrapper">
                {/* Begin: g-topbar-brand */}
                <Image item={'dash_01.svg'} className="g-topbar-brand" alt="gallery logo" />
                {/* End: g-topbar-brand */}
                {/* Begin: g-topbar-nav */}
                <div className="g-topbar-nav">
                    {/* Begin: g-header-profile */}
                    <Link to="/contact" className="g-topbar-profile" title="O meu Perfil">
                        <Image item={'cat.jpg'} className="g-profile-pholder" alt="user" />
                        {/* Contact */}
                    </Link>
                    {/* End: g-header-profile */}
                </div>
                {/* End: g-topbar-nav */}
            </div>
            {/* End: g-wrapper */}
        </div>
     );
}
 
export default Topbar;