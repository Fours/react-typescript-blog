import { useEffect, useState } from "react";

export default function usePromise<T>(callback: () => Promise<T>) {

    type State = {
        result: T | undefined,
        isLoading: boolean
        isError: boolean
    }
    
    const [state, setState] = useState<State>({ result: undefined, isLoading: false, isError: false})

    useEffect(() => {
        setState(prev => { return { ...prev, isLoading: true }})
        callback()
            .then(res => setState(prev => { return { ...prev, result: res }}))
            .catch(error => {
                console.log(error)
                setState(prev => { return {...prev, isError: true }})
            })
            .finally(() => setState(prev => { return { ...prev, isLoading: false }}))
    }, [])

    return state
}