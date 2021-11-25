import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => {
	return <ButtonStyled>{text}</ButtonStyled>;
};

const ButtonStyled = styled.button`
	font-size: 1.2rem;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	background-color: var(--color-primary);
	color: var(--color-secondary-dark);

	&:hover {
		transform: translateY(-0.1rem);
	}

	&:active {
		transform: translateY(0.1rem);
	}
`;

export default Button;
