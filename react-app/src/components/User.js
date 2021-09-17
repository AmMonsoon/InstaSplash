import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { authenticate } from '../store/session';
import { postFollow, destroyFollow, fetchUser } from '../store/user'
import EditProfilePicture from './EditProfilePicture';
import "./User.css"

function User() {
  const dispatch = useDispatch()
  const [showEditProfilePic, setShowEditProfilePic] = useState(false)
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
      await dispatch(authenticate())
    })();
  }, [userId, dispatch]);

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
  let content;
    const displayEdit = (e) => {
        e.preventDefault()
        setShowEditProfilePic(true)
    }

  const hideEdit = async () => {
      await dispatch(fetchUser(userId))
      setShowEditProfilePic(false)
    }

  if (showEditProfilePic) {
    content = <EditProfilePicture hideEdit={hideEdit} currentUrl={ user.profilePic }/>
  } else {
    content =
      <div className="userPage__wrapper">

        <div className="userPage__leftCol">

          <div className="userPage__profilePic">
            <img src={user?.profilePic} alt=""></img>
          </div>
        </div>

        <div className="userPage__rightCol">

          <div className="userPage__follow">
            { currentUser.id !== Number(userId) && follow && <button onClick={e => handleUnfollow(e)}>Unfollow</button> }
            { currentUser.id !== Number(userId) && !follow && <button onClick={e => handleFollow(e)}>Follow</button>}
          </div>

          <div className="userPage__profilePic--editButton">
            {currentUser.id === Number(userId) && <button onClick={e => displayEdit(e)}> Edit Profile Pic</button>}
          </div>

          <div className="userPage__info--wrapper">
            <div className="userPage__info">
              <strong>User Id</strong> {userId}
              </div>
          </div>

          <div className="userPage__info">
            <strong>Username</strong> {user?.username}
          </div>

          <div className="userPage__info">
            <strong>Email</strong> {user?.email}
          </div>

        </div>
      </div>
  }

  return (
    <div>
      { content }
    </div>);
}
export default User;
