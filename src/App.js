// App.js
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import Cart from './pages/HomePage';
import WhoWeArePage from "./pages/WhoWeArePage";
import HistoryPage from "./pages/HistoryPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="who" element={<WhoWeArePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="sign" element={<SignInSignUpPage />} />

     </Routes>
  );
}

export default App;
