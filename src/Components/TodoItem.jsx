import React, { useState } from 'react';
import styled from 'styled-components';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import BoltIcon from '@mui/icons-material/Bolt';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const TodoItem = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [todoTitle, setTodoTitle] = useState(props.todo.title);

	const todoClasses = props.todo.completed
		? 'todo_text completed'
		: 'todo_text';

	const removeTodo = () => {
		props.removeTodo(props.todo.id);
	};

	const toggleComplete = () => {
		props.toggleComplete(props.todo.id);
	};

	const toggleIsEditing = () => {
		setIsEditing((isEditing) => !isEditing);
	};

	const saveEdit = (e) => {
		e.preventDefault();
		// Update the new title in array
		props.updateTodo(props.todo.id, todoTitle);
		// Set editing to false
		setIsEditing(false);
	};

	return (
		<TodoItemStyled>
			{!isEditing ? (
				<div className={todoClasses}>
					<BoltIcon />
					<p>{todoTitle}</p>
				</div>
			) : (
				<form className="todo_edit" onSubmit={saveEdit}>
					<input
						type="text"
						defaultValue={todoTitle}
						onChange={(e) => setTodoTitle(e.target.value)}
					/>
					<button type="submit" className="icon">
						<CheckCircleIcon />
					</button>
				</form>
			)}

			{!isEditing ? (
				<div className="todo_actions">
					<button className="icon" onClick={toggleComplete}>
						{!props.todo.completed ? (
							<CheckRoundedIcon />
						) : (
							<RemoveRoundedIcon />
						)}
					</button>
					<button className="icon" onClick={toggleIsEditing}>
						<EditRoundedIcon />
					</button>
					<button className="icon" onClick={removeTodo}>
						<DeleteForeverRoundedIcon />
					</button>
				</div>
			) : (
				''
			)}
		</TodoItemStyled>
	);
};

// CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS
const TodoItemStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.5rem;
	border-bottom: 1px solid var(--color-secondary-light);
	margin-bottom: 0.5rem;

	.todo_edit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		input {
			padding: 0.5rem;
			border: none;
			width: 100%;
			margin-right: 1rem;
			border-radius: 0.5rem;
			background-color: var(--color-secondary-light);
			color: var(--color-off-white);
		}
	}

	.icon {
		background-color: var(--color-secondary-light);
		border: none;
		color: var(--color-off-white);
		border-radius: 0.2rem;
		width: 2rem;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 0.5rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover {
			background-color: var(--color-primary);
			color: var(--color-secondary-dark);
		}

		&:active {
			transform: translateY(0.1rem);
		}
	}

	.completed {
		color: var(--color-primary);
	}

	&:hover {
		background-color: var(--color-secondary);
	}

	.todo_text {
		display: flex;
		align-items: center;
		transition: all 0.3s ease-in-out;
	}

	.todo_actions {
		display: flex;
	}
`;

export default TodoItem;
