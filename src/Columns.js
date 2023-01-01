import React from 'react';
import Task from "./Task";

const Columns = (props) => {
    const {status, tasks, changePriority, changeStatus, statuses, deleteFruits} = props
    return (
        <div className="col">
            <h2>{status.toUpperCase()}</h2>
            {tasks.filter(el => el.status === status).map(el =>
                (<Task
                    key={el.id}
                    task={el}
                    changePriority={changePriority}
                    changeStatus={changeStatus}
                    statuses={statuses}
                    deleteFruits={deleteFruits}
                />))}
        </div>
    );
};

export default Columns;
