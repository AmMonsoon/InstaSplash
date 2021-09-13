import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getFollowing } from '../store/image'

function Home() {
    const user = useSelector(state => state.session.user)
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