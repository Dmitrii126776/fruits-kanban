import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {useState} from "react";
import Columns from "./Columns";
import {Button} from "reactstrap";
import CreateModal from "./CreateModal";

function App() {
    const fruits = [
        {id: uuidv4(), name: 'Grapefruit', status: 'todo', priority: 6, description: 'delicious'},
        {id: uuidv4(), name: 'Orange', status: 'in progress', priority: 7, description: 'beautiful'},
        {id: uuidv4(), name: 'Papaya', status: 'review', priority: 3, description: 'sweet'},
        {id: uuidv4(), name: 'Mango', status: 'done', priority: 2, description: 'adorable'},
    ]
    const [statuses, setStatuses] = useState(['todo', 'in progress', 'review', 'done'])

    const [priorities, setPriorities] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const [tasks, setTasks] = useState(fruits)

    const addNewFruit = (newFruit) => {
        setTasks([...tasks, newFruit])
    }

    const updateFruit = (updatedFruit) => {
        setTasks(tasks.map(el => el.id === updatedFruit.id ? {...updatedFruit} : el))
    }
    const changePriority = (id, value) => {
        setTasks(tasks.map(el => el.id === id ? {...el, priority: el.priority + value} : el))
    }

    const changeStatus = (id, status, value) => {
        const currentIndex = statuses.indexOf(status)
        const newStatus = statuses[currentIndex + value]
        setTasks(tasks.map(el => el.id === id ? {...el, status: newStatus} : el))
    }

    const deleteFruits = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <h1>Fruits Kanban</h1>
            <CreateModal priorities={priorities} statuses={statuses} addNewFruit={addNewFruit}/>
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map((el, i) =>
                        (<Columns
                            key={i}
                            status={el}
                            tasks={tasks}
                            changePriority={changePriority}
                            changeStatus={changeStatus}
                            statuses={statuses}
                            deleteFruits={deleteFruits}
                            priorities={priorities}
                            updateFruit={updateFruit}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default App;
