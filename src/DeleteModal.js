import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteModal(props) {
    const {modal, toggle, task, deleteFruits} = props
    const onDeleteButton = () => {
        deleteFruits(task.id)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete Fruits</ModalHeader>
                <ModalBody>
                    Do you want to delete {task.name} ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={onDeleteButton}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;
