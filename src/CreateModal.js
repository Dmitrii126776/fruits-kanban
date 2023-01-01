import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupText, InputGroup} from 'reactstrap';

function CreateModal(props) {
    const {priorities, statuses, addNewFruit} = props
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState(statuses[0])
    const [fruitPriority, setFruitPriority] = useState(priorities[0])
    const [modal, setModal] = useState(false);

    const saveFruit = () => {
        const newFruit = {
            id: uuidv4(),
            name,
            status,
            description,
            priority: +fruitPriority
        }
        addNewFruit(newFruit)
        toggle()
    }
    const toggle = () => {
        setModal(!modal);
        setName('')
        setDescription('')
        setStatus(statuses[0])
        setFruitPriority(priorities[0])
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Add New Fruit
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Fruit</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText>
                            Fruit:
                        </InputGroupText>
                        <Input value={name} onChange={e => setName(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Description:
                        </InputGroupText>
                        <Input value={description} onChange={e => setDescription(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Status:
                        </InputGroupText>
                        <select
                            value={status} onChange={e => setStatus(e.target.value)}
                            className="form-select" aria-label="Default select example">
                            {statuses.map((el, i) => <option key={i} value={el}>{el}</option>)}
                        </select>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Priority:
                        </InputGroupText>
                        <select value={fruitPriority}
                                onChange={e => setFruitPriority(e.target.value)}
                                className="form-select" aria-label="Default select example">
                            {priorities.map((el, i) => <option key={i} value={el}>{el}</option>)}
                        </select>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveFruit} disabled={name === '' || description === ''}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateModal;
