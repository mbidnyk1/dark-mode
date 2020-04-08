import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage('darkModeKey')
    useEffect( () => {
        if(storedValue === true) {
            document.body.classList.add('dark-mode')
        }
        else{
            document.body.classList.remove('dark-mode')
        }   
    },[storedValue])

    return [storedValue, setValue]
}