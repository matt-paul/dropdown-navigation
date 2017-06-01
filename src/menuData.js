import iconCreate from './visuals/icon-create.svg';
import iconSettings from './visuals/icon-settings.svg';
import iconYourCourses from './visuals/icon-your-courses.svg';
import iconYourProfile from './visuals/icon-your-profile.svg';
import iconSignOut from './visuals/icon-sign-out.svg';

export const menuData = [
  {
    icon: iconYourCourses,
    title: 'Your courses',
    altText: 'your-courses-icon',
    classNames: 'dropdown__item dropdown__item--large',
    href: '#/your-courses',
  },
  {
    icon: iconCreate,
    title: 'Create',
    altText: 'create-icon',
    classNames: 'dropdown__item dropdown__item--large',
    href: '#/create',
  },
  {
    icon: iconYourProfile,
    title: 'Your profile',
    altText: 'your-profile-icon',
    classNames: 'dropdown__item',
    href: '#/profile',
  },
  {
    icon: iconSettings,
    title: 'Settings',
    altText: 'settings-icon',
    classNames: 'dropdown__item',
    href: '#/settings',
  },
  {
    icon: iconSignOut,
    title: 'Sign out',
    altText: 'sign-out-icon',
    classNames: 'dropdown__item',
    href: '#/sign-out',
  },
];
