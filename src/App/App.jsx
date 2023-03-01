import React, {useCallback, useState} from 'react';

import './App.css';
import Form from "../Form/Form";
import List from "../List/List";

function App() {
    const [todosList, setTodosList] = useState([]);

    const handleChangeItemStatus = useCallback((id, checked) => {
        setTodosList((prevState) => prevState.map((item) => {
            if (item.id === id) {
                return {...item, checked: checked}
            }

            return item;
        }))
    }, [])

    return (
        <div className="container">
            <Form setTodo={setTodosList}/>
            <List todos={todosList} changeItemStatus={handleChangeItemStatus}/>
        </div>
    );
}

export default App;
