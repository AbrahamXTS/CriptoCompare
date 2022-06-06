import styled from "@emotion/styled";
import { Navigation } from "./Navigation";
import { Container } from "./Container";

const App = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: calc(100vh - 6rem);
`;

export const Layout = ({ children }) => {
	return (
		<div>
			<Navigation />
			<App>{children}</App>
		</div>
	);
};
