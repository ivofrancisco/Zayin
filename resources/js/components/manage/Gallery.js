import '../../assets/manage/sass/Gallery.scss';

import Button from '../commons/Button';
import { Link } from 'react-router-dom';

const Gallery = (props) => {

    const noDecoration = {
        textDecoration: 'none'
    }

    return ( 
        <div className="g-gallery shadow-sm">
            {/* Begin: s-glr-head */}
            <div className="s-glr-head">
                {/* Begin: s-glr-head-info */}
                <div className="s-glr-head-info">
                    <h4>{props.title}</h4>
                    <p>
                        {props.intro}
                    </p>
                </div>
                {/* End: s-glr-head-info */}
                {/* Begin: s-glr-head-action */}
                <div className="s-glr-head-action">
                    <Link to={`/edit/${props.id}`} style={noDecoration}>
                        <Button type="button" className="btn btn-mini primary" value={<i className="icon-pencil"></i>} />
                    </Link>
                    <Button className="btn btn-mini danger" value={<i className="icon-trash" data-index={props.id}></i>} handleClick={props.handleClick} />
                </div>
                {/* End: s-glr-head-action */}
            </div>
            {/* End: s-glr-head */}
            {/* Begin: s-glr-body */}
            <div className="s-glr-body">
                {props.introSlide}
            </div>
            {/* End: s-glr-body */}
        </div>
     );
}
 
export default Gallery;