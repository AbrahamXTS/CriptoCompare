import { useState, useEffect } from 'react';
import { Select, Option } from "./Select";
import { currencies, getCriptoList, getInfo } from '../data';
import styled from '@emotion/styled';

const Formulario = styled.form`
    width: 100%;

    @media (min-width: 650px) {
        width: 60rem;
    }
`;

const Submit = styled.input`
    cursor: pointer;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    background-color: var(--primary);
    
    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const Form = ({ moneda, setMoneda, cripto, setCripto, setIsLoading, setIsInfoReady, setCriptoInfo }) => {

    const [criptoList, setCriptoList] = useState([]);

    useEffect(() => {
        getCriptoList()
            .then(({data}) => setCriptoList(data.Data));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([moneda, cripto].includes("")) {
            alert("Todos los campos son obligatorios.")
        } else {
            setIsLoading(true);
            setIsInfoReady(false);
            getInfo(moneda, cripto)
                .then(({data}) => setCriptoInfo(data.DISPLAY[cripto][moneda]));
        }
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <Select label="Selecciona tu moneda local:" name="monedas" setState={setMoneda} >
                {currencies.map(({id, nombre}) => <Option key={id} value={id}>{nombre}</Option>)}
            </Select>
            <Select label="Selecciona la cripto que deseas cotizar:" name="criptos" setState={setCripto}>
                {criptoList.map(({CoinInfo}) => {
                    const { Name, FullName } = CoinInfo;
                    return <Option key={Name} value={Name}>{FullName}</Option>
                })}
            </Select>
            <Submit type="submit" value="Consultar" />
        </Formulario>
    )
}
