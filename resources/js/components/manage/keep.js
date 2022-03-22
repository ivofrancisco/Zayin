import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/manage/sass/forms.scss';
import axios from 'axios';
import { appendFormItem } from '../../utils.js';
import validate from '../../validations/validate';

import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from '../commons/Button';
import PhotosWrapper from './PhotosWrapper';
import AddUploader from './AddUploader';


const AddGallery = () => {

    const history = useHistory();
    const initialValues = { title: '', email: '', body: '', photos: [] };
    const [fileUploaders, setUploaders] = useState([1]);
    const [gallery, setGallery] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmitted] = useState(false);

    const selectPhoto = (photo) => {
        setUploaders(fileUploaders.concat(1))
        setGallery({
            ...gallery,
            photos: gallery.photos.concat(photo)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setErrors(validate(gallery));
        setIsSubmitted(true);
    }

    const saveGallery = async () => {
    
        const formData = new FormData();

        appendFormItem('title', gallery.title, formData);
        appendFormItem('body', gallery.body, formData);
        appendFormItem('photos[]', gallery.photos, formData);
        
        await axios.post(`/api/create`, formData).then(({ data }) => {
            setGallery(initialValues);
            setUploaders([]);
            history.push("/");
        })
        .catch((response) => {
            console.log(response.data); 
        })
    }

    useEffect(() => {
        if (Object.values(errors).length === 0 && isSubmit) {
            saveGallery();
        }
    }, [errors])

    return ( 
        <form className="g-create-edit-form" id="g-create-edit-form" onSubmit={handleSubmit}>
            {/* Begin: form-group */}
            <div className="form-group">
                <TextInput
                type="text"
                label="Title"
                name="title"
                idName="title"
                className="form-control brd md"
                value={gallery.title || ''}
                handleChange={(e) => setGallery({ ...gallery, title: e.target.value })} />
                <small className="form-text text-danger">{ errors.title }</small>
            </div>
            {/* End: form-group */}
            {/* Begin: form-group */}
            <div className="form-group">
                <TextInput
                type="text"
                label="Email"
                name="email"
                idName="email"
                className="form-control brd md"
                value={gallery.email || ''}
                handleChange={(e) => setGallery({ ...gallery, email: e.target.value })} />
                <small className="form-text text-danger">{ errors.email }</small>
            </div>
            {/* End: form-group */}
            {/* Begin: form-group */}
            <div className="form-group">
                <TextArea
                label="Description"
                name="body"
                idName="body"
                className="form-control textarea brd"
                value={gallery.body || ''}
                handleChange={(e) => setGallery({ ...gallery, body: e.target.value })} />
                <small className="form-text text-danger">{ errors.body }</small>
            </div>
            {/* End: form-group */}
            {/* Begin: PhotosWrapper */}
            <PhotosWrapper title="Add Images" idName="s-uploads-wrapper">
                <AddUploader name="photos[]" fileUploaders={fileUploaders} selectPhoto={selectPhoto} />
            </PhotosWrapper>
            <small className="form-text text-danger">{ errors.photos }</small>
            {/* End: PhotosWrapper */}
            <Button type="submit" className="btn btn-primary bbm" value="Save Gallery" />
        </form>
    );
}
 
export default AddGallery;