import React, {useState} from 'react'
import CreateImage from '../AddImage'
import {Modal} from "../context/Modal"

function CreateImageModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                <i className="fas fa-plus"></i>
            </button>
            {showModal && (
                <Modal className="modal__addImage" onClose={() => setShowModal(false)}>
                    <CreateImage setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default CreateImageModal
