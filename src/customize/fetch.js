import { useEffect, useState } from "react"
import axios from "axios"
const useFetch = (URL) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(URL)
                setData(data)
                setIsLoading(true)
                setIsError(false)
                if (data.length || Object.keys(data).length) setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false)
                setIsError(true);
            }
        })()
    }, [])
    return {
        data: data,
        isLoading: isLoading,
        isError: isError
    }
}

export default useFetch;