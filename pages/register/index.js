import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../state/actions/authaction";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
    if (token) {
      if (state.path) {
        router.push(`/blogs/${state.path}`);
      } else {
        router.push("/");
      }
      dispatch({ type: "AUTH_USER", payload: token });
    }
    setMessage(state.message);
  }, [token]);

  return (
    <div className="mt-28">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form
        className="mt-8 max-w-sm m-5/6 mx-auto text-center"
        onSubmit={handleSubmit}
      >
        {message && (
          <h1
            className={`${
              message === "Login Successful" ? "bg-green-500" : "bg-red-500"
            } text-white rounded-lg py-3 w-5/6 mx-auto`}
          >
            {message}
          </h1>
        )}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="border-2 w-5/6 border-black rounded-md h-12 px-3 font-lato m-2"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 w-5/6 border-black rounded-md h-12 px-3 font-lato m-2"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 w-5/6 border-black rounded-md h-12 px-3 font-lato m-2 outline-none"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button className=" bg-gray-800 text-white w-5/6 rounded-md h-12 px-3 font-lato m-2">
            Register
          </button>
          <h1>
            Already have an account? <Link href="/login">Login now</Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Register;
