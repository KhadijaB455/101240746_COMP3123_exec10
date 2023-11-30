# This is a simple React application with authentication using Redux and JSON Web Tokens (JWT).

# Files 
- actions/authActions.js
loginSuccess creates a login success action with a token payload, while logout generates a logout action without additional data.
- components/Dashboard.js
The Dashboard component renders a basic user dashboard with a welcome message and a logout button. Clicking the logout button triggers the handleLogout function, dispatching the logout action to facilitate user logout.
- components/Login.js
The Login component is a basic React component handling user authentication. It  input fields for a username and password, along with a login button. The handleLogin function, triggered by the button click, dispatches the loginSuccess action with a placeholder JWT token to simulate a successful login.
- middleware/jwtMiddleware.js
The jwtMiddleware handles user login and logout actions in a Redux application. When a user logs in LOGIN_SUCCESS, it decodes and stores the provided JWT token. On logout LOGOUT, it removes any stored token.
- reducers/authReducers.js
authReducer keeps track of whether a user is logged in or not, and stores the authentication token accordingly.
- App.js
App.js displays the Dashboard if the user is authenticated, otherwise it shows the Login.


User authentication using JWT.
- Basic login and dashboard components.
- Redux for state management.
- Installing node.js
# 101240746_COMP3123_exec10
