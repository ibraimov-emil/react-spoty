import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Discover from "./pages/Discover";
import TopArtists from "./pages/TopArtists";


const AppRouter = () => {

    return (
        <Routes>
  
                <Route path="/" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                {/* <Route path="/top-artists" element={<TopArtists />} exact/> */}


                {/* <Route path={path} element={Component} exact/> */}

             <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

export default AppRouter;