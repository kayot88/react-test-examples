import React from 'react';

const NavBar = () => (
  <div className="navbar" role='navigation'>
    <a href="/" data-testid="company-logo">
      <img src="/logo192.png" alt="Company Logo" />
    </a>

    <ul>
      <li>
        <a href="/"> Home </a>
      </li>
      <li>
        <a href="/about"> About </a>
      </li>
      <li>
        <a href="/contact"> Contact </a>
      </li>
      <li>
        <a href="/search"> Search </a>
      </li>
    </ul>

  </div>
);

export default NavBar;