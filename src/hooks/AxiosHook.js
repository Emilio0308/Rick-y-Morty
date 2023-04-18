import axios from 'axios'
import { useEffect, useState } from 'react'

const AxiosHook = (url) => {
    const [db, setDb] = useState()
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then( (res) => setDb(res.data))
        .catch( (err) => console.log( err))
        .finally( setLoading(false))
    }, [])

    const reFetch = (url) =>{
        axios.get(url)
        .then( (res) => setDb(res.data))
        .catch( (err) => setErr( err))
        .finally( setLoading(false))
    }
    return { db , loading ,err, reFetch}
    
}

export default AxiosHook