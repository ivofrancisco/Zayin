import '../../assets/manage/sass/ImagePreview.scss';
import Image from "../commons/Image";


const Preview = ({ item, fileName, handleClick }) => {
    return ( 
        <div className="g-image-preview">
            {/* Begin: g-manage-photo */}
            <div className="g-manage-photo shadow-sm" onClick={handleClick}>
                <i className="icon-trash" data-file={fileName}></i>
            </div>
            {/* End: g-manage-photo */}
            <Image item={item} className="s-portrait shadow-sm" alt="preview image" isPreview={true} />
        </div>
    );
}
 
export default Preview;