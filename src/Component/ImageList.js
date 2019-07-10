import React from 'react';
import ImageCard from './ImageCard';
import './imageList.css';

const ImageList = props => {

    // const image = props.images.map(image => {
    //     return <img alt={image.description} key={image.id} src={image.urls.regular}/>
    // });

    const image = props.images.map(image => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className='image_list'>{image}</div>
};

export default ImageList;