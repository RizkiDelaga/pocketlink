import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';
import Home from "./pages/Home";
import QRCode from "./pages/Dashboard/QRCode/QRCode";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import CreateLinkPage from './pages/Dashboard/LinkPage/CreateLinkPage';
import ShortLink from './pages/Dashboard/ShortLink/ShortLink';
import Dashboard from './pages/Dashboard/Dashboard';
import PageViewer from './pages/PageViewer/PageViewer';
import ThemeModeComponent from './provider/components/ThemeModeComponent';
import ThemeProviderComponent from './provider/components/ThemeProviderComponent';
import LinkPage from './pages/Dashboard/LinkPage/LinkPage';
import Quill from './pages/Quill';
import Quill2 from './pages/Quill2';
import DashboardLayout from './layouts/DashboardLayout';
import DefaultLayout from './layouts/DefaultLayout';
import SSOAuthentication from './pages/Auth/SSOAuthentication';
import Profile from './pages/Dashboard/Profile/Profile';
import Notifications from './pages/Dashboard/Notifications/Notifications';
import Settings from './pages/Dashboard/Settings/Settings';
import ActiveSubscription from './pages/Dashboard/ActiveSubscription/ActiveSubscription';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SSOProcess from './pages/Auth/SSOProcess';
  
function App() {

  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("accessToken")) {
        return <Navigate to={"/Dashboard"} />
    }
    return <Outlet/>;
  }

  const ProtectedRoute = () => {
    if (!localStorage.getItem("accessToken")) {
        return <Navigate to={"/SSOAuthentication"} />
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
          window.location.href = "/PageNotFound";
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
            <Route element={<HandleLoginSuccessfully />}>
              <Route path="SSOAuthentication" element={<SSOAuthentication/>}/>
            </Route>
            
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="Dashboard" element={<Dashboard />}/>
                <Route path="Dashboard/Profile" element={<Profile />}/>
                <Route path="Dashboard/Notifications" element={<Notifications />} />
                <Route path="Dashboard/Settings" element={<Settings />} />
                <Route path="Dashboard/ActiveSubscription" element={<ActiveSubscription />} />

                <Route path="Dashboard/ShortLink" element={<ShortLink />}/>
                <Route path="Dashboard/QRCode" element={<QRCode/>}/>
                <Route path="Dashboard/LinkPage" element={<LinkPage />}/>
                <Route path="Dashboard/LinkPage/CreteLinkPage" element={<CreateLinkPage />}/>
                <Route path="Dashboard/LinkPage/:pageId" element={"Edit Page"}/>
              </Route>
            </Route>

            <Route element={<DefaultLayout />}>
              <Route path="" element={<Home />}/>
            </Route>
              <Route path="PageNotFound" element={<PageNotFound />}/>
              
            <Route path="SSOProcess" element={<SSOProcess />}/>

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
