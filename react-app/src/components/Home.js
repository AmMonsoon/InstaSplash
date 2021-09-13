import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFollow } from '../store/image'

function Home(){
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await dispatch(getFollow());
          })();
    }, [dispatch])
    

    return (
        <h1>
            test
        </h1>
        // <>
        //     {console.log('user' + user)}
        //     <h1>
        //         Hello youve reached the Home Page
        //     </h1>
        // </>
    )
}


export default Home 
