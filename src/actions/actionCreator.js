import { REQUEST_LOGIN ,REQUEST_REGISTER } from './actionTypes'

export const requestLogin = payload => ({
    type: REQUEST_LOGIN,
    payload,
  });
  

  export const requestRegister = payload => ({
    type: REQUEST_REGISTER,
    payload,
  });

