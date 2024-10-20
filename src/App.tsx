import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "@/layouts/root";
import HomePage from "@/pages/home";
import ProductPage from "@/pages/product-page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="product/:slug" element={<ProductPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
