import ScrollToTop from './ScrollToTop';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <ScrollToTop />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout; 