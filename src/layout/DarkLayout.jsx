import styled from '@emotion/styled'
import { Navigation } from './Navigation';
import { Container } from './Container';

const DarkLayout = styled.div`
    background-color: var(--background);
`;

const App = styled(Container)`
  height: calc(100vh - 6rem);
`

export const Layout = ({children}) => {
  return (
    <DarkLayout>
        <Navigation />
        <App>
            {children}
        </App>
    </DarkLayout>
  )
}
