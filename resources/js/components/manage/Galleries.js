import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../assets/manage/sass/Galleries.scss';
import { appendFormItem } from '../../utils.js';

import Gallery from './Gallery';
import Image from '../commons/Image';

const Galleries = () => {

    const history = useHistory();
    const [galleriesList, setGalleriesList] = useState([]);

    useEffect(() =>{
        axios.get('https://zayin.test/api/')
            .then(res => {
                setGalleriesList(res.data);
            })
    }, [])

    const deleteGallery = (e) => {
        e.preventDefault();
        
        const id = e.target.getAttribute('data-index');

        const formData = new FormData();
        appendFormItem('@method', 'DELETE', formData);

        axios.post(`/api/delete/${id}`, formData).then((res) => {
            history.go("/");
        }).catch((error) => {
            console.log(error)
        });
    }

    return ( 
        <div id="p-galleries" className="row">
            {
                galleriesList.map( gallery => (
                    <Gallery
                        key={gallery.id} 
                        id={gallery.id}
                        title={gallery.title}
                        intro={gallery.body}
                        introSlide={<Image item={gallery.photos[0]}
                        alt={gallery.title} />}
                        handleClick={(e) => deleteGallery(e)}
                    />
                ))
            }
        </div>
    );
}
 
export default Galleries;