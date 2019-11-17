import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Strona główna',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Użytkownicy',
    icon: 'people',
    children: [
      {
        title: 'Zarządzenie',
        link: '/pages/users',
      },
    ],
  },
  {
    title: 'Zgłoszenia',
    icon: 'people',
    children: [
      {
        title: 'Lista',
        link: '/pages/alerts',
      },
      {
        title: 'Moderacja',
        link: '/pages/alerts/add',
      },
    ],
  },
  {
    title: 'Lokalizacje',
    icon: 'people',
    children: [
      {
        title: 'Lista',
        link: '/pages/locations',
      },
      {
        title: 'Dodaj',
        link: '/pages/locations/add',
      },
      {
        title: 'Statystyki',
        link: '/pages/locations/stats',
      },
    ],
  },
  {
    title: 'Autoryzacja',
    icon: 'lock-outline',
    children: [
      {
        title: 'Logowanie',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
