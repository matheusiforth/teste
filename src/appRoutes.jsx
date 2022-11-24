import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { RetornaPagina } from './aRetornaPagina';


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/curso1' element={<RetornaPagina type={1}/>} />
                <Route path='/curso2' element={<RetornaPagina type={2}/>} />
                <Route path='/curso3' element={<RetornaPagina type={3}/>} />
            </Routes>
        </BrowserRouter>
    )
}