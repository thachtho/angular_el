import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import LOCAL_STORAGE_KEY from '@libs/enum/local-storage';
import { ROUTER } from '@libs/enum/router';
import { isUrlLogin } from '@libs/utils';

export const authGuard: CanActivateFn = (route, state) => {
  const isLogin = localStorage.getItem(LOCAL_STORAGE_KEY.USER_LOGIN)

  if (isLogin) {
    if (isUrlLogin(state)) {
      inject(Router).navigate(['/']);
    }
    // User is logged in, so return true
    return true;
  }

  inject(Router).navigate([ROUTER.LOGIN]);
  return false;
};

