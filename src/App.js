import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './UI/Container';
import Title from './UI/Title';
import TodoList from './Components/TodoList';
import AddToDo from './Components/AddToDo';

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Learn React',
			completed: false,
		},
		{
			id: 2,
			title: 'Pay $5000 bill',
			completed: false,
		},
	]);

	console.log(todos);

	const addTodoHandler = (todo) => {
		setTodos([...todos, todo]);
	};

	const removeTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
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
		</AppStyled>
	);
}

const AppStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default App;
