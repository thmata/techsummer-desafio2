import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/components/Product/Product";
// import your route components too

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}