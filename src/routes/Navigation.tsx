import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"

import logo from '../assets/react.svg';
import {  LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-component-patterns/pages";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" width={100}/>
            <ul>
              <li>
                <NavLink to={'/'} className={({isActive})=> isActive ? 'nav-active' : ''}>Shopping</NavLink>
              </li>
              <li>
                <NavLink to={'/lazy2'} className={({isActive})=> isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
              </li>
              <li>
                <NavLink to={'/lazy3'} className={({isActive})=> isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="home" element={<ShoppingPage />} />
            <Route path="lazy2" element={<LazyPage2 />} />
            <Route path="lazy3" element={<LazyPage3 />} />

            <Route path="/*" element={<Navigate to={'/home'} replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}
