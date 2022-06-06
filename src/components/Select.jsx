import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
`;

const Selector = styled.select`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--primary);
`;

export const Option = styled.option`
    color: black;
    background-color: white;
`;

export const Select = ({label, name, setState, children}) => {
	return (
		<Field>
			<Label>{label}</Label>
			<Selector title={name} name={name} onChange={setState}>
				<Option hidden>Seleccione una opción</Option>
                {children}
			</Selector>
		</Field>
	);
};
