import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Orders from './Orders/Orders';
import OrderDetails from './Orders/OrderDetails';
import { Container } from '@mui/material';
import Box from '@mui/material/Box'
import Navbar from './Navbar';
import CustomerDetails from './Customers/CustomerDetails';
import Customers from './Customers/Customers';

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Box sx={{ pt: 15}}>
                    <Routes>
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Orders' element={<Orders />} />
                        <Route path='/Orders/:id' element={<OrderDetails />} />
                        <Route path='/Customers' element={<Customers />} />
                        <Route path='/Customers/:id' element={<CustomerDetails />} />
                        <Route path='*' element={<NotFound />} />
                        <Route />
                    </Routes>
                </Box>
            </Container>
        </>
    );
}

export default App;