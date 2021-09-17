import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExplore } from '../store/image'
import { NavLink } from 'react-router-dom'
import "./Home.css"


function Home(){
    // const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const exploreImages = useSelector(state => Object.values(state.images.notFollowing))

    useEffect(() => {
        (async () => {
            await dispatch(getExplore());
          })();
    }, [dispatch])


    return (

        <div className='following__wrapper'>
            <div className="following__allFollowing">
                <ul className="following__ul">
                {exploreImages.map((image) =>
                    // <div className="following__li--div" key={image.id}>
                        <li key={image.id} className="following__li">
                            <NavLink to={`/images/${image.id}`}>
                                <img className="following__singleImage--image" src={image.imageUrl} alt=""></img>
                            </NavLink>
                        </li>
                    //  </div>
                )}
                </ul>
            </div>
       </div>
    )
}


export default Home
