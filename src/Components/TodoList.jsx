import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

	const onDragEndHandler = (result) => {
		if (!result.destination) return;

		const items = Array.from(todos);
		const [currentItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, currentItem);

		setTodos(items);
		props.setTodoOrder(items);
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

			<DragDropContext onDragEnd={onDragEndHandler}>
				<Droppable droppableId="todos">
					{(provided) => (
						<ul
							className="todos"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{todos.map((todo, index) => {
								return (
									<Draggable
										key={todo.id}
										draggableId={`${todo.id}`}
										index={index}
									>
										{(provided) => (
											<li
												className="todo"
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												ref={provided.innerRef}
											>
												<TodoItem
													todo={todo}
													removeTodo={removeTodoHandler}
													toggleComplete={toggleCompleteHandler}
													updateTodo={updateTodoHandler}
												/>
											</li>
										)}
									</Draggable>
								);
							})}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
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

	li {
		list-style: none;
	}

	.todos {
		width: 100%;
	}

	.todo:not(:last-child) {
		border-bottom: 1px solid var(--color-secondary-light);
	}

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
