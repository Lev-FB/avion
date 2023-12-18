import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from "./navigation/Navigation";
import MainPage from "../pages/MainPage";
import ProductPage from '../pages/ProductPage'
import Footer from "./footer/Footer";




function App() {
  return (
    <>
        <Navigation/>
        <main>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/About' element={<h1>About</h1>}/>
                <Route path='/Products' element={<ProductPage/>}/>
                <Route path='/Cart' element={<h1>Cart</h1>}/>
                <Route path='/Product/:name' element={<h1>Products</h1>}/>
                <Route path='*' element={<h1>Please return to main page</h1>}/>
            </Routes>
        </main>
        <Footer/>
    </>

  )
}

export default App
