import React from 'react';
import styled from 'styled-components';
import iconCreate from '../visuals/icon-create.svg';
import iconSettings from '../visuals/icon-settings.svg';
import iconYourCourses from '../visuals/icon-your-courses.svg';
import iconYourProfile from '../visuals/icon-your-profile.svg';
import iconSignOut from '../visuals/icon-sign-out.svg';

function DropdownMenu(props) {
  return (
    <div className={props.className}>
      <ul className="dropdown">
        <li className="dropdown__item dropdown__item--large">
          <a href="#">
            <img src={iconYourCourses} alt="your-courses-icon" />
            <span>Your courses</span>
          </a>
        </li>
        <li className="dropdown__item dropdown__item--large">
          <a href="#">
            <img src={iconCreate} alt="create-icon" />
            <span>Create</span>
          </a>
        </li>
        <li className="dropdown__item">
          <a href="#">
            <img src={iconYourProfile} alt="your-profile-icon" />
            <span>Your profile</span>
          </a>
        </li>
        <li className="dropdown__item">
          <a href="#">
            <img src={iconSettings} alt="settings-icon" />
            <span>Settings</span>
          </a>
        </li>
        <li className="dropdown__item">
          <a href="#">
            <img src={iconSignOut} alt="sign-out-icon" />
            <span>Sign out</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default styled(DropdownMenu)`
  .dropdown {
    position: absolute;
    // opacity: 0;
    // visibility: hidden;
    transition: visibility 0.5s;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 180px;
    text-align: left;
    top: 60px;
    right: 0px;
    border: 1px solid #ededee;
    box-shadow: 0px 1px 1px 1px #ededee;
  }

  .dropdown__item {
    cursor: pointer;
    text-align: left;
    padding: 8px 16px;
    line-height: 24px;
    a {
      text-decoration: none ;
      img {
        margin-right: 16px;
        vertical-align: middle;
        width: 24px;
      }
      span {
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        color: #4a4d55;
        font-size: 14px;
      }
    }
  }

  .dropdown__item--large {
    padding: 16px;
    border-bottom: 1px solid #ededee;
  }
`;
