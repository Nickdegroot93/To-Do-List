import styled from 'styled-components';
import React from 'react';

const Container = (props) => {
	return <ContainerStyled>{props.children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 35rem;
	background-color: var(--color-secondary-dark);
	border-radius: 0.5rem;
	padding: 1rem;
	font-size: 1.6rem;
	-webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
	box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
`;

export default Container;
