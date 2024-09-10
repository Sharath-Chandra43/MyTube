
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer.js';
import WatchPage from './components/WatchPage.js';

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<Maincontainer />
    },
    {
      path:'/watch',
      element: <WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    
    <div className="App">
   
      <Head/>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>

  );
}

export default App;
