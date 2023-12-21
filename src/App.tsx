import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/navigation/Navigation";
import MainPage from "./pages/MainPage";
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import AboutPage from "./pages/AboutPage";
import SelectProductPage from "./pages/SelectProductPage";
import Footer from "./components/footer/Footer";




function App() {
    return (
    <>
        <Navigation/>
        <main>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/About' element={<AboutPage/>}/>
                    <Route path='/Products' element={<ProductPage/>}/>
                    <Route path='/Cart' element={<CartPage/>}/>
                    <Route path='/Product/:name' element={<SelectProductPage/>}/>
                    <Route path='*' element={<h1>Please return to main page</h1>}/>
                </Routes>
            </main>
        <Footer/>
    </>

  )
}

export default App
