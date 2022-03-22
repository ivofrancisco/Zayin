import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/manage/sass/forms.scss';
import axios from 'axios';
import { appendFormItem } from '../../utils.js';
import validate from '../../validations/validate';

import Input from './Input';
import TextArea from './TextArea';
import Button from '../commons/Button';
import SpeciaWrapper from './SpeciaWrapper';
import Uploads from './Uploads';
import Uploader from './Uploader';


const AddGallery = () => {

    const history = useHistory();
    const initialValues = { title: '', body: '', photos: [] };
    const [gallery, setGallery] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmitted] = useState(false);

    const selectPhoto = (photo) => {
        setGallery({
            ...gallery,
            photos: gallery.photos.concat(photo)
        });
    }

    const removePhoto = (fileName) => {
        let updatedPhotos = gallery.photos.filter( photo => {
           return photo.name !== fileName;
       })
        setGallery({
            ...gallery,
            photos: updatedPhotos
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(gallery));
        setIsSubmitted(true);
    }

    console.log(gallery);

    const saveGallery = async () => {
    
        const formData = new FormData();

        appendFormItem('title', gallery.title, formData);
        appendFormItem('body', gallery.body, formData);
        appendFormItem('photos[]', gallery.photos, formData);
        
        await axios.post(`api/create`, formData).then(({ data }) => {
            setGallery(initialValues);
            //setUploaders([]);
            history.push("/");
            console.log(data)
        })
        .catch((response) => {
            console.log(response);
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
                <Input
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

            {/* Begin: SpeciaWrapper */}
            <SpeciaWrapper idName="s-uploads-wrapper">
                <Uploads photos={gallery.photos} removePhoto={removePhoto} />
                <Uploader name="photos[]" selectPhoto={selectPhoto} />
            </SpeciaWrapper>
            <small className="form-text text-danger">{ errors.photos }</small>
            {/* End: PhotosWrapper */}
            
            <Button type="submit" className="btn btn-primary bbm" value="Save Gallery" />
        </form>
    );
}
 
export default AddGallery;