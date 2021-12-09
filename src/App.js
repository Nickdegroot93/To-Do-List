import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './UI/Container';
import Title from './UI/Title';
import TodoList from './Components/TodoList';
import AddToDo from './Components/AddToDo';
import Notification from './UI/Notification';
import ThemeSwitch from './Components/ThemeSwitch';

function App() {
	// Todo data
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Learn React',
			completed: false,
		},
		{
			id: 2,
			title: 'Tidy up the apartment',
			completed: false,
		},
		{
			id: 3,
			title: 'Create a to-do app',
			completed: true,
		},
	]);

	const [notificationMessage, setNotificationMessage] = useState([]);

	// Handlers
	const notificationHandler = () => {
		clearTimeout();
		setNotificationMessage((prevNotifications) => [
			...prevNotifications,
			'To-do removed',
		]);

		setTimeout(() => {
			setNotificationMessage([]);
		}, 3000);
	};

	const addTodoHandler = (todo) => {
		setTodos([...todos, todo]);
	};

	const removeTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
		notificationHandler();
	};

	const toggleCompleteHandler = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	const setTodoOrderHandler = (todos) => {
		setTodos(todos);
	};

	const UpdateTodoHandler = (id, title) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.title = title;
				}
				return todo;
			})
		);
	};

	return (
		<AppStyled>
			<ThemeSwitch />
			<Container>
				<Title title={'To-do List'} />
				<AddToDo todos={todos} addTodo={addTodoHandler} />
				<TodoList
					todos={todos}
					removeTodo={removeTodoHandler}
					toggleComplete={toggleCompleteHandler}
					updateTodo={UpdateTodoHandler}
					setTodoOrder={setTodoOrderHandler}
				/>
			</Container>
			{notificationMessage.length > 0 &&
				notificationMessage.map((message) => (
					<Notification message={message} />
				))}
		</AppStyled>
	);
}

const AppStyled = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 768px) {
		margin-top: 1rem;
	}
`;

export default App;
