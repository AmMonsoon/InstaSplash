import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addNewImage } from "../store/image"
import { useHistory } from "react-router-dom"
import './AddImage.css'

const CreateImage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id)

    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
    // const [profilePic, setProfilePic] = useState(null)
    const [validationErrors, setValidationErrors] = useState([])

    const checkImage = async(url) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function() {
              if (this.width > 0) {
                resolve(true)
            }
        }
        image.onerror = function () {
            resolve(false)
        }
        image.src = url;
        })  
}

const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = [];
    let checkedImage = await checkImage(imageUrl)
    if(!checkedImage) errors.push("Please include a valid image URL")
    if (errors.length){
        setValidationErrors(errors)
    } else {
        const image = {
            caption,
            imageUrl,
        }
            let createdImage = await dispatch(addNewImage(image))
            if(createdImage) {
                history.push(`/images/${createdImage.id}`)
            }
    
        }
    }


    const handleCancel = async(e) => {
        e.preventDefault();
        history.push(`/users/${userId}`)
    }

    return(
        <section className='add-image-section'>
            <h1 id='add-image-header'>Post a Pic</h1>
             <div>
            {validationErrors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
            </div>
            <form 
            className='add-image-form'
            onSubmit={handleSubmit}>
                <input className='new-image-form-input'
                placeholder="Caption"
                type="text"
                required
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                />
                <input className='new-image-form-input'
                placeholder="Image URL"
                type="text"
                required
                value={imageUrl}
                onChange={((e) => setImageUrl(e.target.value))}
                />
            {imageUrl && <div><div>Preview Post:</div><img className="add-img-preview" src={imageUrl} alt=""></img></div>}
           
                <button type="submit" >Submit</button>
                <button type="click" onClick={handleCancel}>Cancel</button>

            </form>
        </section>
    )
}

export default CreateImage;
