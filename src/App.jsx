import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/700.css"; // Specify weight
import "@fontsource/nunito/600.css"; // Specify weight
import "@fontsource/nunito/500.css"; // Specify weight
import "@fontsource/nunito/400.css"; // Specify weight
import "@fontsource/nunito/400-italic.css"; // Specify weight and style

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";

import Login from "./pages/login";
import Sidebar from "./components/bars/SideBar";
import SmallSidebar from "./components/bars/SmallSidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/users/user";
import Store from "./pages/Hotel/Hotel";
import Booking from "./pages/Hotel/booking";
import Settings from "./pages/Settings/Settings";

export const AuthContext = React.createContext();

function App() {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [changeUser, setChangeUser] = useState(false)
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")));

  const value = {
    hideSidebar,
    setHideSidebar,
    changeUser,
    setChangeUser
  };

  // screen
  const Outlet = (component) => {
    return (
      <div className="w-screen min-h-screen bg-black">
        <div className="hidden md:block "
        style={{ overflowX: "hidden" }}>
         <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
      {login && (
        <div className="h-full grid grid-cols ">
          <div className="flex-grow ">
            <Sidebar />
            </div>
            <div className="bg-black h-full ml-60 flex-grow ">{component}</div>
          </div>
      )}

         
        </div>

        {/* medium screen */}
        <div className="block md:hidden">
        {login && (
          <div className="h-screen grid grid-cols w-full">
            {hideSidebar ? (
              <div className="flex bg-black h-full">{component}</div>
            ) : (
              <div>

              <SmallSidebar />
              <div className="bg-black h-full ml-20 flex-grow ">{component}</div>
              </div>
            )}

           
          </div>
        )}
        </div>
      </div>
    );
  };

   // screen
   const LoginOutlet = (component) => {
    return (
      <div className=" bg-black"
      style={{ 
        // backgroundImage: `url(${AdminBg})`, 
        // backgroundSize: 'cover', // Ensure the background image covers the entire container
        height: '100vh', 
        width:'100vw',
        // backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
        // backgroundPosition: 'center', // Center the background image within the container
        // backgroundAttachment: 'fixed' // Ensure the background image covers the entire viewport
      }}
    >
      {component}
    </div>
    
    
    );
  };
  return (
    <BrowserRouter>
      <AuthContext.Provider value={value}>
        <Routes>
          <Route path="/" element={LoginOutlet(<Login />)} />
          <Route path="/admin" element={Outlet(<Dashboard />)} />
          <Route path="/admin/user" element={Outlet(<User />)} />
          <Route path="/admin/hotel" element={Outlet(<Store />)} />
          <Route path="/admin/booking" element={Outlet(<Booking />)} />
          <Route path="/admin/settings" element={Outlet(<Settings />)} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
