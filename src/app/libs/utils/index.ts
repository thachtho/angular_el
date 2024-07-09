import { RouterStateSnapshot } from "@angular/router";
import { ROUTER } from "@libs/enum/router";

const isUrlLogin = (state: RouterStateSnapshot) => state.url === `/${ROUTER.LOGIN}`

export {
    isUrlLogin
}