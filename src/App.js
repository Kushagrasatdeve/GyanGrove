import { Outlet, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
    ]
  }
])

function App(){
  return(
    <>
    <Header/>
    <Home/>
    <Outlet />
    </>
  )
}

export default App;
