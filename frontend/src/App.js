import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Orders from './Orders/Orders';
import OrderDetails from './Orders/OrderDetails';
import { Container } from '@mui/material';
import Box from '@mui/material/Box'
import Navbar from './Navbar';
import CustomerDetails from './Customers/CustomerDetails';
import CustomerCreation from './Customers/CustomerCreation';
import CustomerTable from './Customers/CustomerTable';

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Box sx={{ pt: 15}}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Orders' element={<Orders />} />
                        <Route path='/Orders/:id' element={<OrderDetails />} />
                        <Route path='/Customers' element={<CustomerTable />} />
                        <Route path='/Customers/:idParam' element={<CustomerDetails />} />
                        <Route path='/CustomerCreation' element={<CustomerCreation />} />
                        <Route path='*' element={<NotFound />} />
                        <Route />
                    </Routes>
                </Box>
            </Container>
        </>
    );
}

export default App;