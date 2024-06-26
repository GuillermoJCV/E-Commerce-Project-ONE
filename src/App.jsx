import { lazy, Suspense} from 'react';
import Header from './components/header-page/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/loader.css"
import { getCssVariable } from "./utils/getRootCSSVariables/getVariables.js"
import { GooeyCircleLoader } from "react-loaders-kit"

const HomePage = lazy(() => import('./components/home-page/HomePage.jsx'))
const ProductsPage = lazy(() => import('./components/products-page/ProductsPage.jsx'))
const Login = lazy(() => import('./components/login/Login.jsx'))
const ContactsPage = lazy(() => import('./components/contacts-page/ContactsPage.jsx'))
const ProductInfo = lazy(() => import('./components/products-page/product-info/ProductInfo.jsx'))

function App() {
  const headerBgColor = getCssVariable("--header-bg-color")
  const stSecondaryColor = getCssVariable("--st-secondary-color")
  const ndSecondaryColor = getCssVariable("--nd-secondary-color")

  const loaderProps = {
    loading: true,
    size: 80,
    duration: 2,
    colors: [headerBgColor, stSecondaryColor, ndSecondaryColor],
  };

  return (
    <BrowserRouter>
      <Header/>
        <Suspense fallback={<main role="loader"><GooeyCircleLoader {...loaderProps}/></main>}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/product/:productId" element={<ProductInfo/>}/>
            <Route path="/contact" element={<ContactsPage/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Suspense>
      {/*<Footer/>*/}
    </BrowserRouter>
  )
}

export default App
