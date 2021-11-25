import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
	return <TitleStyled>{title}</TitleStyled>;
};

const TitleStyled = styled.h1`
	font-size: 1.6rem;
	padding: 1rem;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: var(--color-primary);
	}
`;

export default Title;
