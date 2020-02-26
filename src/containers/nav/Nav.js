import React from 'react';
import './Nav.css';
import analytics from '../../assets/imgs/analytics.svg';
import happy from '../../assets/imgs/happy.svg';
import schedule from '../../assets/imgs/schedule.svg';
import comment from '../../assets/imgs/comment.svg';

const Nav = () => (
  <aside className="menu">
    <a href="#analytics" className="menu__item">
      <img src={analytics} alt="analytics menu item" />
    </a>

    <a href="#happy" className="menu__item">
      <img src={happy} alt="happy menu item" />
    </a>

    <a href="#schedule" className="menu__item">
      <img src={schedule} alt="schedule menu item" />
    </a>

    <a href="#comment" className="menu__item">
      <img src={comment} alt="comment menu item" />
    </a>
  </aside>
);

export default Nav;
