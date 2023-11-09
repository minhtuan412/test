export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;

export const login = (): AuthActionTypes => ({
  type: LOGIN,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});