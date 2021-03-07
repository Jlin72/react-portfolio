import React from 'react';
// import Context from '../Util/Context';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactBody from '../components/ConctactBody/ContactBody';

const Contact = () => {
  // const [context, setContext] = useState(Context);
  console.log(window.location.pathname)
  return (
    <>
    <Navbar />
    <ContactBody />
    <Footer />
    </>
  );
}

export default Contact;