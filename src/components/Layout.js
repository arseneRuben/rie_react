// components/Layout.js
import CopyRight from './CopyRight';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer/>
      <CopyRight/>
    </>
  );
}

export default Layout;
