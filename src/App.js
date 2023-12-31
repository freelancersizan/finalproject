import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1350px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
