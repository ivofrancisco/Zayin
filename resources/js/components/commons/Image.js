
const Image = ({ isPreview, item, alt, className }) => {
    const path = `http://127.0.0.1:8000/images/${item}`;
    return ( 
        <img
        src={ isPreview ? item : path }
        className={className}
        alt={alt} />
     );
}
 
export default Image;