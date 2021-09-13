import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Image(){
    const [image, setImage] =useState({})
    const {imageId} = useParams();



    useEffect(() => {
        if(!imageId){
            return;
        }
        (async () => {
            const response = await fetch(`/api/images/${imageId}`);
            const image  = await response.json();
            setImage(image);
          })();
    },[imageId])
    if (!image) {
        return null;
      }

    return(
        <h1>{image.caption}</h1>
    )
}

export default Image;