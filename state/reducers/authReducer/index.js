const initialState = {
  auth: "",
  message: "",
  path: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER":
      return {
        ...state,
        auth: action.payload,
      };
    case "AUTH_USER_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    case "AUTH_USER_PATH":
      return {
        ...state,
        path: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
