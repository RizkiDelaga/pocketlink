// import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router';
import HomePage from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import QRCode from "./pages/dashboard/QRCode/QRCode";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import CreateLinkPage from './pages/dashboard/LinkPage/CreateLinkPage';
import ShortLink from './pages/dashboard/ShortLink/ShortLink';
import Dashboard from './pages/dashboard/Dashboard';
import PageViewer from './pages/PageViewer/PageViewer';
import MainLayout from './layout/MainLayout';


function App() {

  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("accessToken")) {
        return <Navigate to={""} />
    }
    return <Outlet/>;
  }


  const DirectShortLink =  () =>{
    const location = useLocation();    

    SearchShortLink(location.pathname.split("/").join(""))
    .then(result => {
      window.location.href = result
      return null
    })
    .catch(error => {
      console.log(error);
      return alert(location.pathname)
    });
  }

  const SearchShortLink = async (path) => {
    try {
      const res = await axios({
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        url: `${process.env.REACT_APP_API_KEY}/api/v1/link/search/by?customLink=${path}`,
      });
      
      return res.data.data[0].customLink === path? res.data.data[0].rawLink: null
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        {/* <Route element={<HandleLoginSuccessfully />}>
        </Route> */}
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="LoginProcess/:Token" element={"Login Process"}/>
          

        <Route element={<MainLayout />}>
          <Route path="Dashboard" element={<Dashboard />}/>
          <Route path="Dashboard/ShortLink" element={<ShortLink />}/>
          <Route path="Dashboard/QRCode" element={<QRCode/>}/>
          <Route path="Dashboard/LinkPage" element={<CreateLinkPage/>}/>
          <Route path="Dashboard/LinkPage/Create" element={"Create Page"}/>
          <Route path="Dashboard/LinkPage/:pageId" element={"Edit Page"}/>
        </Route>
        

        <Route path="m/*" element={<PageViewer/>}/>
        <Route path="*" element={<DirectShortLink/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// To-Do
// 1. Make Layout
// 2. Slicing All Page
// 3. Coloring Theme
// 4. Page 404
// 5. Awevers Project (Next JS)


