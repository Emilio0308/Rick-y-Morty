import axios from 'axios'
import { useEffect, useState } from 'react'

const AxiosHook = (url) => {
    const [db, setDb] = useState()

    useEffect(() => {
        axios.get(url)
        .then( (res) => setDb( res.data))
        .catch( (err) => console.log( err))
    }, [])

    return { db }
    
}

export default AxiosHook