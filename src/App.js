import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App container">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
