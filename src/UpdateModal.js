import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateModal(props) {

    const {toggle, modal, task, statuses, priorities, updateFruit} = props

    const [nameValue, setNameValue] = useState(task.name)
    const [descriptionValue, setDescriptionValue] = useState(task.description)
    const [statusValue, setStatusValue] = useState(task.status)
    const [priorityValue, setPriorityValue] = useState(task.priority)

    const saveUpdatedFruit = () => {
        const updatedFruit = {
            id: task.id,
            name: nameValue,
            description: descriptionValue,
            status: statusValue,
            priority: +priorityValue,
        }
        updateFruit(updatedFruit)
        toggle()
    }

    const cancelUpdate = () => {
        setNameValue(task.name)
        setStatusValue(task.name)
        setDescriptionValue(task.description)
        setPriorityValue(+task.priority)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Fruit</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Fruit:</span>
                        <input type="text" className="form-control" value={nameValue}
                               onChange={e => setNameValue(e.target.value)}
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Description: </span>
                        <input type="text" className="form-control" value={descriptionValue}
                               onChange={e => setDescriptionValue(e.target.value)}
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Status:</span>
                        <select value={statusValue} onChange={e => setStatusValue(e.target.value)}
                                className="form-select" aria-label="Default select example">
                            {statuses.map((el, i) => (<option key={i} value={el}>{el}</option>))}

                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Priority</span>
                        <select value={priorityValue} onChange={e => setPriorityValue(e.target.value)}
                                className="form-select" aria-label="Default select example">
                            {priorities.map((el, i) => (<option key={i} value={el}>{el}</option>))}
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={saveUpdatedFruit}
                            disabled={nameValue === '' || descriptionValue === ''}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={cancelUpdate}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UpdateModal;
