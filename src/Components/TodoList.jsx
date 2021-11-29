import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('All');

	useEffect(() => {
		if (filter === 'All') {
			setTodos(props.todos);
		} else if (filter === 'Active') {
			setTodos(props.todos.filter((todo) => !todo.completed));
		} else if (filter === 'Completed') {
			setTodos(props.todos.filter((todo) => todo.completed));
		}
	}, [filter, props.todos]);

	const todoStats = {
		total: props.todos.length,
		active: props.todos.filter((todo) => !todo.completed).length,
		completed: props.todos.filter((todo) => todo.completed).length,
	};

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
			{props.todos.length > 0 && (
				<div className="todo_filters">
					<select
						id="todo_filters"
						name="todo_filters"
						onChange={(e) => setFilter(e.target.value)}
					>
						<option value="All">All ({todoStats.total})</option>
						<option value="Active">Active ({todoStats.active})</option>
						<option value="Completed">Completed ({todoStats.completed})</option>
					</select>
				</div>
			)}
			{todos.length === 0 && (
				<div className="not-found">There's nothing here...</div>
			)}
			{todos.map((todo) => (
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

	.not-found {
		padding: 1rem;
		font-style: italic;
		color: var(--color-off-white);
	}

	.todo_filters {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;

		select {
			width: 100%;
			padding: 0.5rem 1rem;
			background-color: var(--color-secondary-light);
			color: var(--color--off-white);
			border: none;
		}
	}
`;

export default TodoList;
