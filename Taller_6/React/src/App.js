import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cena from './pages/cena';




function App(){
    return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Cena /> }>
           {/*  <Route ipath="Hero"  element={<Hero />} />
           <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> 
         */}</Route>

        </Routes>
    
    </BrowserRouter>
    );

    }

    export default App;