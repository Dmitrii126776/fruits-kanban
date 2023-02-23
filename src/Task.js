import React, {useState} from 'react';
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const Task = (props) => {
    const {task, changePriority, changeStatus, statuses, deleteFruits, priorities, updateFruit} = props
    const [deleteModal, setDeleteModal] = useState(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    const [updateModal, setUpdateModal] = useState(false);

    const updateToggle = () => setUpdateModal(!updateModal);
    const handleDragStart = (event) => {
        event.dataTransfer.setData('taskId', task.id);
    };


    return (
        <div draggable={true}
             onDragStart={handleDragStart} className="card" style={{backgroundColor: "silver", marginBottom:10}}>
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <p className="card-text">{task.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{backgroundColor: "silver"}}>Status: {task.status}</li>
                <li className="list-group-item" style={{backgroundColor: "silver"}}>Priority:
                    {task.priority}{' '}
                    <button className='btn btn-outline-primary btn-sm'
                            disabled={task.priority === 0}
                            onClick={() => changePriority(task.id, -1)}
                    >↓
                    </button>
                    {' '}
                    <button className='btn btn-outline-primary btn-sm'
                            disabled={task.priority === 10}
                            onClick={() => changePriority(task.id, 1)}
                    >↑
                    </button>
                </li>
            </ul>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button className='btn btn-outline-primary btn-sm'
                        onClick={() => changeStatus(task.id, task.status, -1)}
                        disabled={statuses.indexOf(task.status) === 0}
                >←
                </button>
                <button type="button" className="btn btn-outline-success" onClick={updateToggle}>Update</button>
                <UpdateModal modal={updateModal} toggle={updateToggle}
                             task={task} statuses={statuses}
                             priorities={priorities} updateFruit={updateFruit}
                />
                <button type="button" className="btn btn-outline-danger" onClick={deleteToggle}>Delete</button>

                <button className='btn btn-outline-primary btn-sm'
                        disabled={statuses.indexOf(task.status) === statuses.length - 1}
                        onClick={() => changeStatus(task.id, task.status, 1)}
                >→
                </button>
            </div>
            <DeleteModal modal={deleteModal} toggle={deleteToggle} task={task} deleteFruits={deleteFruits}/>
        </div>
    );
};

export default Task;
