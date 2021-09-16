import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFollow } from '../store/image'
import { NavLink } from 'react-router-dom'
import "./Home.css"


function Home(){
    // const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const followingImages = useSelector(state => Object.values(state.images.following))

    useEffect(() => {
        (async () => {
            await dispatch(getFollow());
          })();
    }, [dispatch])


    return (

        <div className='following__wrapper'>
            <div className="following__allFollowing--gallery">
                {followingImages.map((image) =>
                        <NavLink to={`/images/${image.id}`}>
                            <div className="singleImg-div" key={image.id} style={{backgroundImage: 'url(' + image.imageUrl + ')'}}>
                            </div>
                            {/* <img className="following__singleImage--image" src={image.imageUrl} alt=""></img> */}
                        </NavLink>
                )}
            </div>
       </div>
        // <>
        //     {console.log('user' + user)}
        //     <h1>
        //         Hello youve reached the Home Page
        //     </h1>
        // </>
    )
}


export default Home
