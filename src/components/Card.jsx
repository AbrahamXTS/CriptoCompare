import styled from "@emotion/styled";

const CardContainer = styled.div`
	width: 100%;
	display: grid;
	padding: 3rem;
	margin-top: 2rem;
	border-radius: 1.5rem;
	background-color: var(--primary);

	@media (min-width: 650px) {
		width: 60rem;
		grid-template-columns: 1fr 2fr;
	}
`;

const ImageCripto = styled.img`
	display: none;

	@media (min-width: 650px) {
		display: block;
		height: 12.5rem;
	}
`;

const TextContainer = styled.div`
	gap: 1rem;
	display: flex;
	flex-direction: column;
`;

import React from "react";

export const Card = ({ criptoInfo }) => {

    const { IMAGEURL, PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR } = criptoInfo;

	return (
		<CardContainer>
			<ImageCripto
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt="Cripto Logo"
			/>
			<TextContainer>
				<p>Precio actual: {PRICE}</p>
				<p>Precio más alto del día: {HIGHDAY}</p>
				<p>Precio más bajo del día: {LOWDAY}</p>
				<p>Cambio en las últimas 24 horas: {CHANGE24HOUR}</p>
			</TextContainer>
		</CardContainer>
	);
};
