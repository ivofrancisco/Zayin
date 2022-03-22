import Input from "./Input";
import Preview from './Preview';


const Uploads = ({photos, removePhoto}) => {

    const previewImage = (photo) => {
        return URL.createObjectURL(photo);
    }

    const handleClick = (e) => {
        if (e.target.classList.contains('icon-trash')) {
            removePhoto(e.target.getAttribute('data-file'));
        }
    }

    const displayPreviews = () => {
        return photos.map( (photo, i) => (
            <Preview item={previewImage(photo)} key={i} fileName={photo.name} isPreview={false} handleClick={handleClick} />
        ));
    }

    return ( 
        <div className="g-uploads">
            { displayPreviews() }
        </div>
    )
}
 
export default Uploads;