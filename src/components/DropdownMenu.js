import React from 'react';
import iconCreate from '../visuals/icon-create.svg';
import iconSettings from '../visuals/icon-settings.svg';
import iconYourCourses from '../visuals/icon-your-courses.svg';
import iconYourProfile from '../visuals/icon-your-profile.svg';
import iconSignOut from '../visuals/icon-sign-out.svg';

export default function DropdownMenu() {
  return (
    <div>
      <ul>
        <li>
          <a href="#">
            <img src={iconYourCourses} alt="your-courses-icon" />
            <span>Your courses</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconCreate} alt="create-icon" />
            <span>Create</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconYourProfile} alt="your-profile-icon" />
            <span>Your profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconSettings} alt="settings-icon" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconSignOut} alt="sign-out-icon" />
            <span>Sign out</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
