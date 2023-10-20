import useFetchPage from "../Hooks/useFetchPage";
import OrderTable from "./OrderTable";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Orders() {

    const { data, isLoading, error, refreshData, setPage, setPageSize} = useFetchPage('http://localhost:8080/api/v1/salesorder', 0, 10);

    return (
        <>
            {isLoading && <CircularProgress />}
            {error &&  <Typography>Error while loading data</Typography>}
            {data && data.content && <OrderTable orders={data.content}/>}
        </>
    )
}