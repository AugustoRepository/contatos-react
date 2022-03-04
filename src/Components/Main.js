import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import PasswordPage from '../Pages/PasswordPage';


const  Main = () =>(
<div className='container mt-4'>
            
            <Routes>
                <Route path="/" exact element={<LoginPage/>}></Route>
                <Route path="/criar-conta" element={<RegisterPage/>}></Route>
                <Route path="/esqueci-minha-senha" element={<PasswordPage/>}></Route>
            </Routes>
            </div>
)
export default Main;
    
    

