import React from 'react';
// import Context from '../Util/IndexContext';
// import Navbar from '../components/Navbar';
import Header from '../components/Header/Header';
import IndexBody from '../components/IndexBody/IndexBody';
import Footer from '../components/Footer/Footer';

const Index = () => {
  // const [context, setContext] = useState(Context);
  return [
    <div>
      <Header />
      <IndexBody />
      <Footer />
    </div>
  ]
}

export default Index;