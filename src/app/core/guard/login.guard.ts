import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import LOCAL_STORAGE_KEY from '@libs/enum/local-storage';
import { isUrlLogin } from '@libs/utils';

export const loginGuard: CanActivateFn = (route, state) => {
  const isLogin = localStorage.getItem(LOCAL_STORAGE_KEY.USER_LOGIN)

  if (isLogin) {
    if (isUrlLogin(state)) {
      inject(Router).navigate(['/']);
    }
  }

  return true;
};
