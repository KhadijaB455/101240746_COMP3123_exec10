
import { jwtDecode } from 'jwt-decode';

const jwtMiddleware = () => (next) => (action) => {
  if (action.type === 'LOGIN_SUCCESS') {
    
    jwtDecode(action.payload.token);

  
    localStorage.setItem('token', action.payload.token);
  } else if (action.type === 'LOGOUT') {
  
    localStorage.removeItem('token');
  }

  return next(action);
};

export default jwtMiddleware;


