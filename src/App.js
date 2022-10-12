import logo from './logo.svg';
import './App.css';
import useGetJsonFile from './hooks/useGetJsonFile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateWallet from './pages/createWallet';
import StoreProvider from './context/StoreProvider';
import { sort } from './utils/helpers';

const testData = [1, 10, 19, 11, 13, 16, 19]

function App() {

  console.log(sort(testData));

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateWallet />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
