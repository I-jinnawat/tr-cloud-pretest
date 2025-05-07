import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    matcher: (url) => {
      if (url.length && url[0].path === 'firstQ') {
        return { consumed: url };
      }
      return null;
    },
    loadComponent: () =>
      import('./firstQ/firstQ.component').then((m) => m.FirstQComponent),
  },
  {
    matcher: (url) => {
      if (url.length && url[0].path === 'secondQ') {
        return { consumed: url };
      }
      return null;
    },
    loadComponent: () =>
      import('./secondQ/secondQ.component').then((m) => m.SecondQComponent),
  },
  {
    matcher: (url) => {
      if (url.length && url[0].path === 'thirdQ') {
        return { consumed: url };
      }
      return null;
    },
    loadComponent: () =>
      import('./thirdQ/thirdQ.component').then((m) => m.ThirdQComponent),
  },
  {
    matcher: (url) => {
      if (url.length && url[0].path === 'fourthQ') {
        return { consumed: url };
      }
      return null;
    },
    loadComponent: () =>
      import('./fourthQ/fourthQ.component').then((m) => m.FourthQComponent),
  },
];
