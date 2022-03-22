import '../../assets/manage/sass/file-uploaders.scss';

import Image from "../commons/Image";

const display = {
    display: 'none'
}

const Uploader = ({name, selectPhoto}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('clickable')) {
            e.target.nextElementSibling.click();
        } 
    }

    const handleChange = (e) => {
        selectPhoto(e.target.files[0]);
    }

    return ( 
        <div className="g-uploader" onClick={handleClick}>
            <Image item={'add_image.svg'} className="clickable" alt="upload image"/>
            <input
            type="file"
            name={name}
            className="photo empty"
            style={display}
            onChange={handleChange} />
        </div>
     );
}
 
export default Uploader;