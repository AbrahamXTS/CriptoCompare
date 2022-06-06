import { useState, useEffect } from 'react';
import { Select, Option } from "./Select";
import { currencies, getCriptoList, getInfo } from '../data';

export const Form = ({ 
        moneda, setMoneda, 
        cripto, setCripto, 
        setIsLoading, setIsInfoReady, setCriptoInfo 
}) => {

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
        <form onSubmit={handleSubmit}>
            <Select label="Selecciona tu moneda local:" name="monedas" setState={setMoneda} >
                {currencies.map(({id, nombre}) => <Option key={id} value={id}>{nombre}</Option>)}
            </Select>
            <Select label="Selecciona la cripto que deseas cotizar:" name="criptos" setState={setCripto}>
                {criptoList.map(({CoinInfo}) => {
                    const { Name, FullName } = CoinInfo;
                    return <Option key={Name} value={Name}>{FullName}</Option>
                })}
            </Select>
            <input type="submit" value="Consultar" />
        </form>
    )
}
