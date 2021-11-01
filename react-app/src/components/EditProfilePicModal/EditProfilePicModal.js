import EditProfilePicture from "../EditProfilePicture";
import React, {useState} from 'react'
import { Modal } from "../context/Modal";
import "./EditProfilePicModal.css"

function EditProfilePicModal() {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <>
            <button className="modal__editProfilePic-button" onClick={() => setShowModal(true)}>
                Change Profile Picture
            </button>
            {showModal && (
                <Modal className="modal__editProfilePic" onClose={() => setShowModal(false)}>
                    <EditProfilePicture setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default EditProfilePicModal
