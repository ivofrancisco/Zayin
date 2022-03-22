import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/manage/sass/forms.scss';
import axios from 'axios';
import { appendFormItem } from '../../utils.js';

import Input from './Input';
import TextArea from './TextArea';
import Button from '../commons/Button';
import SpeciaWrapper from './SpeciaWrapper';
import Uploads from './Uploads';
import Preview from './Preview';

const EditGallery = (props) => {

    const history = useHistory();
    const galleryID = props.match.params.id;
    const [gallery, setGallery] = useState({
        title: '',
        body: '',
        photos: [],
    });

    useEffect(() =>{
        axios.get(`api/edit/${galleryID}`)
            .then(res => {
                setGallery(res.data.gallery);
        })
    }, [])

    // New photos
    const [newPhotos, setNewPhotos] = useState([]);
    // File Uploaders
    const [fileUploaders, concatUploader] = useState([1]);
    const [toDelete, deletePhotos] = useState([]);

    // Photos to be deleted
    const removePhotos = (e) => {
        let toBeDeleted = e.target.parentElement.nextSibling.value;
        let updatedPhotos = gallery.photos.filter( photo => {
            return photo !== toBeDeleted;
        })
        deletePhotos(toDelete.concat(toBeDeleted));
        setGallery({
            ...gallery,
            photos: updatedPhotos,
        });
    }

    const selectPhoto = (photo) => {
        concatUploader(fileUploaders.concat(1));
        setNewPhotos(
            ...newPhotos,
            newPhotos.concat(photo)
        );
    }

    const displayPhotos = () => {
        return gallery.photos.map( (photo, index) => (
            <Preview item={photo} key={index} photo={photo} handleClick={removePhotos} />
        ));
    }

    const updateGallery = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        appendFormItem('@method', 'PUT', formData); // Laravel form update specific
        appendFormItem('title', gallery.title, formData);
        appendFormItem('body', gallery.body, formData);
        appendFormItem('remove[]', toDelete, formData); 
        appendFormItem('photos[]', newPhotos, formData);  
        appendFormItem('current_photos[]', gallery.photos, formData);   

        axios.post(`/api/update/${galleryID}`, formData).then( res => {
            if (res.data.status === 200) {
                //swal("Success",res.data.message,"success");
                //setError([]);
                history.push('/');
            } else if (res.data.status === 422) {
                //swal("All fields are mandetory","","error");
                //setError(res.data.validationErrors);
                history.push(`/api/edit/${galleryID}`);
            } else if (res.data.status === 404) {
                //swal("Error",res.data.message,"error");
                history.push(`/api/edit/${galleryID}`);
            }
        });
    };

    return ( 
        <form className="g-create-edit-form" id="g-create-edit-form" onSubmit={updateGallery}>
            {/* Begin: SpeciaWrapper */}
            <SpeciaWrapper idName="s-photos-wrapper">
                { displayPhotos() }
            </SpeciaWrapper>
            {/* End: PhotosWrapper */}
            {/* Begin: form-group */}
            <div className="form-group">
                <Input
                type="text"
                label="Title"
                idName="title"
                className="form-control brd md mb-3"
                value={gallery.title || ''}
                handleChange={(e) => setGallery({ ...gallery, title: e.target.value })} />
            </div>
            {/* End: form-group */}
            {/* Begin: form-group */}
            <div className="form-group">
                <TextArea
                label="Description"
                idName="body"
                className="form-control textarea brd mb-3"
                value={gallery.body || ''}
                handleChange={(e) => setGallery({ ...gallery, body: e.target.value })} />
            </div>
            {/* End: form-group */}
            {/* Begin: PhotosWrapper */}
            <PhotosWrapper title="Add Images" idName="s-uploads-wrapper">
                <Uploads name="photos[]" fileUploaders={fileUploaders} selectPhoto={selectPhoto} />
            </PhotosWrapper>
            {/* End: PhotosWrapper */}
            <Button type="submit" className="btn btn-primary bbm" value="Save Gallery" />
        </form>
    );
}
 
export default EditGallery;