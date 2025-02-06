// pages/index.js

import Link from 'next/link';
import Carousels from './components/carousels';
import FalseProduct from './components/FalseProduct';
import Footer from './components/Footer';





const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <Carousels />
      <FalseProduct />
      <Footer />
     
    </div>
  );
};

export default Home;
