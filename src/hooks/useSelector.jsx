import { useState } from 'react'

export const useSelector = () => {

    const [state, setState] = useState("");

    const changeValue = (e) => {
        setState(e.target.value)
    }

    return [state, changeValue];
}
