import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/register", user);
    dispatch({
      type: "AUTH_USER",
      payload: res.data.token,
    });
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: "AUTH_USER_MESSAGE",
      payload: res.data.message,
    });
  } catch (err) {
    dispatch({
      type: "AUTH_USER_MESSAGE",
      payload: err.response.data.message,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", user);
    dispatch({
      type: "AUTH_USER",
      payload: res.data.token,
    });
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: "AUTH_USER_MESSAGE",
      payload: res.data.message,
    });
  } catch (err) {
    dispatch({
      type: "AUTH_USER_MESSAGE",
      payload: err.response.data.message,
    });
  }
};
