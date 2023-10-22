import { useEffect, useState } from "react";

const useFetchPage = (url, initialPage, initialPageSize) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(initialPage ? initialPage : 0);
    const [pageSize, setPageSize] = useState(initialPageSize ? initialPageSize : 10);
    const [refresh, setRefresh] = useState(false);

    const refreshData = () => {
        setRefresh(!refresh);
        setIsLoading(true);
    }

    const fetchPage = async () => {
        try{
            const paramStart = url.includes('?') ? '&' : '?';
            const ulrParams = `page=${page}&pageSize=${pageSize}`;
            const res = await fetch(url + paramStart + ulrParams);
            if(!res.ok) {
                throw Error('could not get data from resource')
            }
            const data = await res.json();
            setData(data);
            setIsLoading(false);
            setError(false);
        } catch (e) {
            setError(true);
            setIsLoading(false);
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPage();
    }, [refresh]);

    return {data, isLoading, error, refreshData, setPage, setPageSize}
}

export default useFetchPage;