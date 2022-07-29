import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Terms from './pages/terms';
import Listing from './pages/listing';
import Details from './pages/detail';
import Header from './components/header';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/about" element={<About heading="ABOUT US PAGE"/>}></Route>
        <Route  path="/terms" element={<Terms heading="Terms and conditions PAGE"/>}></Route>
        <Route  path="/listing" element={<Listing heading="Listing PAGE"/>}></Route>
        <Route  path="/details/:id" element={<Details name=""/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
