import React from 'react';
import DropdownMenu from './DropdownMenu';

export default function Nav() {
  return (
    <nav>
      <h3>I'm the Nav</h3>
      <ul>
        <li className="nav-item user-options">NT
          <DropdownMenu />
        </li>
      </ul>
    </nav>
  )
}
