import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const refreshData = () => {
        setRefresh(!refresh);
        setIsLoading(true);
    }

    const fetchItem = async () => {
        try {
            const res = await fetch(url);
            if(!res.ok) {
                throw Error('could not get data from resource')
            }
            const data = await res.json();
            setData(data);
            setIsLoading(false);
            setError(false);
        } catch (e) {
            setError(true);
            console.log(e);
        }
    } 

    useEffect( () => {
        fetchItem();
    }, [refresh]);

    return {data, isLoading, error, refreshData};
}

export default useFetch;