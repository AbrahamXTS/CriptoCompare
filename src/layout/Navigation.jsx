import styled from '@emotion/styled';
import { Container } from './Container';
import LogoSRC from '../../public/logo.png';

const DarkNavigation = styled.nav`
	height: 6rem;
	background-color: var(--primary);
`;

const Brand = styled.div`
	gap: 1rem;
	display: flex;
	align-items: center;
`

const Title = styled.p`
	font-size: 2rem;
	font-weight: bold;
`

const Options = styled(Brand)`
	gap: 3.5rem;
`;

export const Navigation = () => {
	return (
		<DarkNavigation>
			<Container style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
				<Brand>
					<img src={LogoSRC} width={35} alt="Logo" />
					<Title>CryptoCompare</Title>
				</Brand>
				<Options as="ul">
				</Options>
			</Container>
		</DarkNavigation>
	);
};
