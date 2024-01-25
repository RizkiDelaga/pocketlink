import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import QRCode from "./pages/dashboard/QRCode/QRCode";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import CreateLinkPage from './pages/dashboard/LinkPage/CreateLinkPage';
import ShortLink from './pages/dashboard/ShortLink/ShortLink';
import Dashboard from './pages/dashboard/Dashboard';
import PageViewer from './pages/PageViewer/PageViewer';
import ThemeModeComponent from './provider/components/ThemeModeComponent';
import ThemeProviderComponent from './provider/components/ThemeProviderComponent';
import PageNotFound404 from './pages/PageNotFound404';
import LinkPage from './pages/dashboard/LinkPage/LinkPage';
import Quill from './pages/Quill';
import Quill2 from './pages/Quill2';
import DashboardLayout from './layout/DashboardLayout';
import MainLayout from './layout/MainLayout';
import LoginProcess from './pages/auth/LoginProcess';

function App() {


  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("accessToken")) {
        return <Navigate to={"/Dashboard"} />
    }
    return <Outlet/>;
  }

  const ProtectedRoute = () => {
    if (!localStorage.getItem("accessToken")) {
        return <Navigate to={"/Login"} />
    }
    return <Outlet/>;
  }

  const DirectShortLink = () => {
    const location = useLocation();
  
    SearchShortLink(location.pathname.split("/").join(""))
      .then(result => {
        if (result) {
          window.location.href = result;
        } else {
          // Handle case where short link is not found
          window.location.href = "/404PageNotFound";
        }
      })
      .catch(error => {
        console.log(error);
        // Handle other errors as needed
      });
  };
  
  const SearchShortLink = async (path) => {
    try {
      const res = await axios({
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        url: `${process.env.REACT_APP_API_KEY}/api/v1/link/search/by?customLink=${path}`,
      });
  
      // Check if the array is not empty before accessing its elements
      if (res.data.data.length > 0 && res.data.data[0].customLink === path) {
        return res.data.data[0].rawLink;
      } else {
        return null; // Short link not found
      }
    } catch (error) {
      console.log(error);
      // Handle other errors as needed
    }
  };
  

  return (
    <ThemeModeComponent>
      <ThemeProviderComponent>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="" element={<Home />}/>
                <Route path="LoginProcess" element={<LoginProcess />}/>
                <Route path="404PageNotFound" element={<PageNotFound404 />}/>

                <Route element={<HandleLoginSuccessfully />}>
                  <Route path="Login" element={<Login/>}/>
                  <Route path="Register" element={<Register/>}/>
                </Route>
            </Route>
              
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="Dashboard" element={<Dashboard />}/>
                <Route path="Dashboard/ShortLink" element={<ShortLink />}/>
                <Route path="Dashboard/QRCode" element={<QRCode/>}/>
                <Route path="Dashboard/LinkPage" element={<LinkPage />}/>
                <Route path="Dashboard/LinkPage/CreteLinkPage" element={<CreateLinkPage />}/>
                <Route path="Dashboard/LinkPage/:pageId" element={"Edit Page"}/>
              </Route>
            </Route>

            <Route path="Quill" element={<Quill />}/>
            <Route path="Quill2" element={<Quill2 />}/>

            <Route path="m/*" element={<PageViewer/>}/>
            <Route path="*" element={<DirectShortLink/>}/>
            
          </Routes>
        </BrowserRouter>
      </ThemeProviderComponent>
    </ThemeModeComponent>
  );
}

export default App;


// To-Do
// 1. Make Layout
// 2. Slicing All Page
// 3. Coloring Theme
// 4. Page 404
// 5. Awevers Project (Next JS)
// 6. Masterpad (React JS)


