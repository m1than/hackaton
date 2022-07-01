import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/">
          <h5>Games</h5>
        </Link>
        <Link to="/csgo">
          <h5>CS:GO</h5>
        </Link>
        <Link to="/dota">
          <h5>Dota</h5>
        </Link>
        <Link to="/rust">
          <h5>Rust</h5>
        </Link>
        <Link to="/tf2">
          <h5>TF2</h5>
        </Link>
      </div>
    </div>
  );
};

export default Header;
