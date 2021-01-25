import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { HeaderBar, HButton } from './styled';

const HeaderLinkButton = ({ children, to, activeOnlyWhenExact }) => {
  const history = useHistory();
  const isChecked = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  const redirectPage = () => {
    history.push(to);
  };

  return (
    <HButton isChecked={isChecked} onClick={redirectPage}>
      {children}
    </HButton>
  );
};

function Header() {
  return (
    <HeaderBar>
      <div className="header-wrapper">
        <div>
          <h1>
            <b> StartUp Fest </b>
          </h1>
        </div>
        <div className="header-links">
          <HeaderLinkButton to="/" activeOnlyWhenExact>
            StartUps
          </HeaderLinkButton>
          <HeaderLinkButton to="/ranking">
            Ranking
          </HeaderLinkButton>
        </div>
      </div>
    </HeaderBar>
  );
}

HeaderLinkButton.propTypes = {
  children: PropTypes.node,
  activeOnlyWhenExact: PropTypes.bool,
  to: PropTypes.string,
};

HeaderLinkButton.defaultProps = {
  children: '',
  activeOnlyWhenExact: false,
  to: '/',
};

export default Header;
