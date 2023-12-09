const checkJWT = () => {
  const accessToken = localStorage.getItem("token");
  return !!accessToken; // Returns true if accessToken is present, otherwise false
};

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: checkJWT() };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
