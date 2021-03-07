import React from 'react';
// import Context from '../Util/Context';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PortfolioBody from '../components/PorfolioBody/PortfolioBody';
const Portfolio = () => {
  // const [context, setContext] = useState(Context);
  return (
    <div>
      <Navbar />
      <PortfolioBody />
      <Footer />
    </div>
  );
}

export default Portfolio;