import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFollow } from '../store/image'

function Home(){
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    console.log(user)
    useEffect(() => {
        console.log(user)
        dispatch(getFollow(user.id))
    }, [dispatch, user])
    

    return (
        <>
            {console.log('user' + user)}
            <h1>
                Hello youve reached the Home Page
            </h1>
        </>
    )
}


export default Home 