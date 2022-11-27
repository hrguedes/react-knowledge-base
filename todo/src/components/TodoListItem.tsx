import React, { useContext } from "react";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

// models
import { Todo } from "../models/Todo";

// props interface
interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (
    props: TodoListItemProps
) => {
    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
        removeTodo(todo)
    }
    const handleChange = (event: any) => {
        toggle(props.todo)
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input
                        type="checkbox"
                        checked={props.todo.done}
                        onChange={handleChange}
                        className="uk-checkbox" />
                </label>
            </td>
            <td className="uk-width-expand">
                {props.todo.title}
            </td>
            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                    onClick={() => onRemove(props.todo)}
                >
                </button>
            </td>
        </tr>
    )

}

export default TodoListItem;