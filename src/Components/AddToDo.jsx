import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const AddToDo = (props) => {
	const todoTitle = useRef();
	const formRef = useRef();

	const generateID = () => {
		if (props.todos.length === 0) {
			return 0;
		} else {
			return props.todos[props.todos.length - 1].id + 1;
		}
	};

	const addTodo = (e) => {
		e.preventDefault();
		if (todoTitle.current.value === '') {
			return;
		}
		// Create new To-do object
		const newTodo = {
			id: generateID(),
			title: todoTitle.current.value,
			completed: false,
		};
		// Reset input field
		formRef.current.reset();
		// Add new To-do to the list
		props.addTodo(newTodo);
	};

	return (
		<AddToDoStyled onSubmit={addTodo} ref={formRef}>
			<input
				type="text"
				maxLength="50"
				placeholder="Add a todo"
				ref={todoTitle}
			/>
			<Button text="Add" type="Submit" />
		</AddToDoStyled>
	);
};

// CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS // CSS
const AddToDoStyled = styled.form`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 1.3rem;
	margin: 1.5rem;
	position: relative;

	input {
		padding: 0.5rem;
		border: none;
		width: 100%;
		margin-right: 1rem;
		border-radius: 0.5rem;
	}
`;

export default AddToDo;
