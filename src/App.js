import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './UI/Container';
import Title from './UI/Title';
import TodoList from './Components/TodoList';
import AddToDo from './Components/AddToDo';
import Notification from './UI/Notification';
import { Switch } from '@mui/material';

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
			title: 'Get a job',
			completed: false,
		},
		{
			id: 3,
			title: 'Study chess',
			descripion: 'Pay the bill for the month',
			completed: false,
		},
		{
			id: 4,
			title: 'Do absolutely nothing',
			descripion: 'Pay the bill for the month',
			completed: true,
		},
	]);

	const [notificationMessage, setNotificationMessage] = useState([]);

	// Theme functionanlity
	const [theme, setTheme] = useState('light-theme');
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	const themeToggle = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
			setChecked(true);
		} else {
			setTheme('light-theme');
			setChecked(false);
		}
	};

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
			<Switch color="primary" checked={checked} onChange={themeToggle} />
			<Container>
				<Title title={'To-do List'} />
				<AddToDo todos={todos} addTodo={addTodoHandler} />
				<TodoList
					todos={todos}
					removeTodo={removeTodoHandler}
					toggleComplete={toggleCompleteHandler}
					updateTodo={UpdateTodoHandler}
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
`;

export default App;
