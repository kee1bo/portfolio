import PropTypes from 'prop-types';
import Navigation from '../common/Navigation/Navigation';
import Footer from '../common/Footer/Footer';

const Layout = ({ children, sections, social }) => {
  return (
    <>
      <Navigation sections={sections} />
      <main>{children}</main>
      <Footer social={social} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sections: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
};

export default Layout;
