import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

const Label = styled.label`
    font-size: 2rem;
    font-weight: bold;
`;

const Selector = styled.select`
    width: 40rem;
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
