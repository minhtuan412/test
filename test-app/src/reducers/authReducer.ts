import { AuthActionTypes, LOGIN, LOGOUT } from "../actions/authAction";

interface AuthState {
    isLogin: boolean;
  }
  
  const initialState: AuthState = {
    isLogin: false,
  };
  
  const authReducer = (
    state = initialState,
    action: AuthActionTypes
  ): AuthState => {
    switch (action.type) {
      case LOGIN:
        return { ...state, isLogin: true };
      case LOGOUT:
        return { ...state, isLogin: false };
      default:
        return state;
    }
  };
  
  export default authReducer;