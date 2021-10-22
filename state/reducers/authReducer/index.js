const initialState = {
  auth: {},
  message: {},
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

    default:
      return state;
  }
};

export default authReducer;
