import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoList = (props) => {
	const removeTodoHandler = (id) => {
		props.removeTodo(id);
	};

	const toggleCompleteHandler = (id) => {
		props.toggleComplete(id);
	};

	const updateTodoHandler = (id, title) => {
		props.updateTodo(id, title);
	};

	return (
		<TodoListStyled>
			{props.todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					removeTodo={removeTodoHandler}
					toggleComplete={toggleCompleteHandler}
					updateTodo={updateTodoHandler}
				/>
			))}
		</TodoListStyled>
	);
};

// CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS
const TodoListStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default TodoList;
