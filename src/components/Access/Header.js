import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Header = ({ title, number }) => (
  <div className="headers">
    <NavLink to={`/continent/${title}`} className="navLink">
      <FaArrowAltCircleRight />
      <div className="resource">
        <h3>{title}</h3>
        <p>
          <strong>{number}</strong>
          <strong>Countries</strong>
        </p>
      </div>
    </NavLink>
  </div>
);

Header.defaultProps = {
  title: null,
  number: null,
};

Header.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};

export default Header;
