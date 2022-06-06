import { useState, useEffect } from 'react';
import { useSelector } from './hooks/useSelector';
import { Layout } from "./layout/DarkLayout";
import { Spinner } from './components/Spinner';
import { Form } from './components/Form';

function App() {

    const [moneda, setMoneda] = useSelector();
    const [cripto, setCripto] = useSelector();

    const [criptoInfo, setCriptoInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isInfoReady, setIsInfoReady] = useState(false);

    useEffect(() => {
        if (Object.keys(criptoInfo).length > 0) {
            setIsLoading(false);
            setIsInfoReady(true);
        }
    }, [criptoInfo])

	return (
		<Layout>
            <Form 
                moneda={moneda} 
                cripto={cripto}
                setMoneda={setMoneda}
                setCripto={setCripto}  
                setIsLoading={setIsLoading} 
                setCriptoInfo={setCriptoInfo} 
                setIsInfoReady={setIsInfoReady}
            />

            {isLoading && <Spinner />}

            {isInfoReady && (
                <div>
                    <p>Precio actual: {criptoInfo.PRICE}</p>
                    <p>Precio más alto del día: {criptoInfo.PRICE}</p>
                    <p>Precio más bajo del día: {criptoInfo.PRICE}</p>
                </div>
            )}
		</Layout>
	);
}

export default App;
