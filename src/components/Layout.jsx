import ScrollToTop from './ScrollToTop';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen w-full">
      <div className="container-custom">
        {children}
      </div>
      <ScrollToTop />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;