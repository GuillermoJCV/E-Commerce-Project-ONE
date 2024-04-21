import { lazy, Suspense} from 'react';
import Header from './components/header-page/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const HomePage = lazy(() => import('./components/home-page/HomePage.jsx'))
const ProductsPage = lazy(() => import('./components/products-page/ProductsPage.jsx'))
const Login = lazy(() => import('./components/login/Login.jsx'))

function App() {

  return (
    <BrowserRouter>
      <Header/>
        {/* TODO: Este div luego se tiene que cambiar por un componente loader */}
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/contact" element={<></>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Suspense>
      {/*<Footer/>*/}
    </BrowserRouter>
  )
}

export default App
