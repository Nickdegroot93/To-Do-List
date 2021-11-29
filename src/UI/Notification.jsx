import React from 'react';
import styled from 'styled-components';

const Notification = ({ message }) => {
	return <NotificationStyled>{message}</NotificationStyled>;
};

const NotificationStyled = styled.div`
	width: 35rem;
	background-color: var(--color-secondary-dark);
	border-radius: 0.5rem;
	padding: 1rem;
	margin-top: 1rem;
	text-align: center;
	-webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
	box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
`;

export default Notification;
