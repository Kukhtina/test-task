import React, {useCallback, useState} from "react";

import "./form.css";

const Form = ({setTodo}) => {
    const [errors, setErrors] = useState({title: false, description: false});

    const formSubmit = useCallback((e) => {
        e.preventDefault();

        const {title, description} = e.target.elements;
        const isEmptyTitle = title.value.trim() === "";
        const isEmptyDescription = description.value.trim() === "";

        if (isEmptyTitle || isEmptyDescription) {
            setErrors({title: isEmptyTitle, description: isEmptyDescription});
        } else {
            const preparedValues = {
                title: title.value,
                description: description.value,
                checked: false
            };

            setTodo((prevState) => {
                const sortedTodos = prevState.sort((a, b) => a.id - b.id);
                const id = (sortedTodos[sortedTodos.length - 1]?.id ?? 0) + 1;

                return [...prevState, {id, ...preparedValues}]
            });

            e.target.reset();
        }

    }, [setTodo])

    const resetErrorOnInput = useCallback((key) => {
        setErrors((prevState) => ({...prevState, [key]: false}))
    }, [])

    return (
        <div className="form-container">
            <form className="form" onSubmit={formSubmit}>
                <div className={`input-container ${errors.title ? "error" : ""}`}>
                    <label className="label">Title:</label>
                    <input name="title" placeholder="Enter title" onInput={() => resetErrorOnInput("title")}/>
                    {errors.title && <p className="error-message">This field is empty</p>}
                </div>
                <div className={`input-container ${errors.description ? "error" : ""}`}>
                    <label className="label">Description:</label>
                    <input name="description" placeholder="Enter description"
                           onInput={() => resetErrorOnInput("description")}/>
                    {errors.description && <p className="error-message">This field is empty</p>}
                </div>
                <button className="create-button">Create</button>
            </form>
        </div>
    );
}

export default Form;
