import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

function Nav(props) {
  return (
    <nav className={props.className}>
      <ul>
        <li tabIndex="0" className="nav-item user-options">NT
          <DropdownMenu />
        </li>
      </ul>
    </nav>
  )
}

export default styled(Nav)`
  .nav-item {
    position: relative;
    display: inline-block;
    background-color: #de00a5;
    color: #ffffff;
    font-weight: bold;
    padding: 12px;
    &:focus {
      pointer-events: none;
    }
  }

  .nav-item:focus .dropdown {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;
