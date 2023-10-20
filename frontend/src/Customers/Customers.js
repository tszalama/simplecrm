import useFetchPage from "../Hooks/useFetchPage";
import CustomerTable from "./CustomerTable";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Customers() {

    const { data, isLoading, error, refreshData, setPage, setPageSize} = useFetchPage('http://localhost:8080/api/v1/customer', 0, 10);

    return (
        <>
            {isLoading && <CircularProgress />}
            {error &&  <Typography>Error while loading data</Typography>}
            {data && data.content && <CustomerTable data={data.content}/>}
        </>
    );
}