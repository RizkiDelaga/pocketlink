// import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router';
import HomePage from "./pages/HomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import MakeShortLink from "./pages/MakeShortLink";
import QRCode from "./pages/QRCode";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';

function App() {

  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("accessToken")) {
        return <Navigate to={""} />
    }
    return <Outlet/>;
  }


  const ShortLink =  () =>{
    const location = useLocation();    

    searchShortLink(location.pathname.split("/").join(""))
    .then(result => {
      window.location.href = result
      return null
    })
    .catch(error => {
      console.log(error);
      return alert(location.pathname)
    });
  }

  const searchShortLink = async (path) => {
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
        <Route element={<HandleLoginSuccessfully />}>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
        </Route>

        <Route path="/ShortLink" element={<MakeShortLink />}/>
        <Route path="QRCode" element={<QRCode/>}/>

        <Route path="m/*" element={<HomePage/>}/>
        <Route path="*" element={<ShortLink/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
