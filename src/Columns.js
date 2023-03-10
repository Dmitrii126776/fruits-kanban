import React from 'react';
import Task from "./Task";

const Columns = (props) => {
    const {status, tasks, changePriority, changeStatus, statuses, deleteFruits, priorities, updateFruit} = props

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('taskId');
        props.moveTask(taskId, status);
    };


    return (
        <div onDragOver={handleDragOver} onDrop={handleDrop}>
            <h2 className="card" style={{backgroundColor:"chocolate", padding:15, marginBottom:20}} >{status.toUpperCase()}</h2>
            {tasks.filter(el => el.status === status).map(el =>
                (<Task
                    key={el.id}
                    task={el}
                    changePriority={changePriority}
                    changeStatus={changeStatus}
                    statuses={statuses}
                    deleteFruits={deleteFruits}
                    priorities={priorities}
                    updateFruit={updateFruit}
                />))}
        </div>
    );
};

export default Columns;
