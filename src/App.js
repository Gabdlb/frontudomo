import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Menu from "./components/navbar/navbar"
import Home from "./pages/home/home"
import Manga from "./pages/manga/manga"
import Bookstore from "./pages/library/bookstore"
import Cart from "./pages/cart/cart"
import Login from "./pages/login/login"
import Signup from "./pages/signup/signup";
import MangaDetail from "./pages/detail/mangaDetail/mangaDetail";
import Admin from "./pages/admin/admin"
import {Routes} from "react-router";

function App() {
    return (
        <Router>
            <Menu />

            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/mangas' element={<Manga />}/>
                <Route path='/bookstores' element={<Bookstore />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mangaDetail" element={<MangaDetail />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>

        </Router>
    );
}

export default App;
