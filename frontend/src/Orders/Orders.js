import useFetchPage from "../Hooks/useFetchPage";
import OrderTable from "./OrderTable";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import TableToolbar from "../Components/TableToolbar";

export default function Orders() {

    const { data, isLoading, error, refreshData, setPage, setPageSize} = useFetchPage('http://localhost:8080/api/v1/salesorder', 0, 10);

    const handleCreation = () =>{
        console.log("New order");
    };
    
    const handleOpen = (e) => {
        console.log(e);
    }

    const handleSearch = (text) => {
        console.log(text);
    }

    return (
        <>
            {isLoading && <CircularProgress />}
            {error &&  <Typography>Error while loading data</Typography>}
            {data && data.content &&
            <>
                <TableToolbar title="Orders" handleCreation={handleCreation} handleSearch={handleSearch} />
                <OrderTable data={data.content}/>
            </>}
        </>
    )
}