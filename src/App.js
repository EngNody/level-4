




import Home from "./pages/home/Home";
import Root from "./pages/Root";
import Profile from './pages/profile/Profile'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "./pages/create/Create";
import Settings from './pages/settings/settings'
import Logout from './pages/logout/logout'






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Root />}>


      <Route  index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="logout" element={<Logout />} />



      {/* ... etc. */}
    </Route>
  )
);



function App() {


  return (
      <RouterProvider router={router} />
  
);
}

export default App;