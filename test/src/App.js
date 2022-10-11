import logo from './logo.svg';
import './App.css';
import { JSON_API } from './config';
import useGetJsonFile from './hooks/useGetJsonFile';
import sort from './functions/sort';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CreateWallet from './pages/createWallet';
import StoreProvider from './context/StoreProvider';

const testData = [1, 10, 19, 11, 13, 16, 19]

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-wallet' element={<CreateWallet />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
