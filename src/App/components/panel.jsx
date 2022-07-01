import { useState } from 'react';
import { Link } from 'react-router-dom';

const Panel = () => {
  // const [dropDown, setDropDown] = useState(false);
  const [icon, setIcon] = useState(false);
  const hangleIcon = () => setIcon(!icon);
  // const hangleDropDown = () => setDropDown(!dropDown);

  return (
    <div className="panel">
      <div className={icon ? 'panel__search active' : 'panel__search'}>
        <div className="panel__icon-github">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pavlovsun"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        <div className="panel__icon-search" onClick={hangleIcon}>
          <i className="bi bi-search"></i>
        </div>

        <form className="panel__form" role="search">
          <input
            className={
              icon ? 'input active form-control' : 'input form-control'
            }
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      {/* <div className="panel__icon-profile" onClick={hangleDropDown}>
        <img
          className="panel__icon-profile-img"
          src="/images/mary.jpg"
          alt="Profile-img"
        />
      </div> */}
      {/* <div className={dropDown ? 'panel__dropdown' : 'panel__none'}>
        <Link className="panel__profile-link" to={'/profile'}>
          <p className="panel__profile-paragraph">
            <i className="bi bi-person"></i> Profile
          </p>
        </Link>
        <Link className="panel__profile-link" to={'/settings'}>
          <p className="panel__profile-paragraph">
            <i className="bi bi-gear-fill"></i> Settings
          </p>
        </Link>
        <Link className="panel__profile-link" to={'/log-out'}>
          <p className="panel__profile-paragraph">
            <i className="bi bi-box-arrow-right"></i> Log-out
          </p>
        </Link>
      </div> */}
    </div>
  );
};

export default Panel;
