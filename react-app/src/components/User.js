import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import { postFollow, destroyFollow, fetchUser } from '../store/user'
function User() {
  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.session.user)
  const { userId }  = useParams();
  const user = useSelector(state => state.users.all[userId])
  const follow = useSelector(state => state.users.all[userId]?.followers[currentUser.id])

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      await dispatch(fetchUser(userId))
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  const handleUnfollow = async(e) => {
    e.preventDefault()
    await dispatch(destroyFollow(currentUser.id, userId))
}

const handleFollow = async(e) => {
    e.preventDefault()
    await dispatch(postFollow(currentUser.id, userId))
}

  return (
    <>
      <div>
        { currentUser.id !== Number(userId) && follow && <button onClick={e => handleUnfollow(e)}>Unfollow</button> }
        { currentUser.id !== Number(userId) && !follow && <button onClick={e => handleFollow(e)}>Follow</button>}
      </div>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user?.username}
        </li>
        <li>
          <strong>Email</strong> {user?.email}
        </li>
      </ul>
    </>
  );
}
export default User;
