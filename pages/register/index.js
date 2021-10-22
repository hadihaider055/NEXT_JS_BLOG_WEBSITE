import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { registerUser } from "../../state/actions/authaction";
import { useRouter } from "next/router";

const Register = ({ cookie }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    if (cookie.token) {
      router.push("/");
      dispatch({ type: "AUTH_USER", payload: cookie.token });
    }
  }, [cookie]);

  return (
    <div className="mt-28">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form
        className="mt-8 max-w-sm m-5/6 mx-auto text-center"
        onSubmit={handleSubmit}
      >
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
        </div>
      </form>
    </div>
  );
};

export default Register;

// Login.getLayout = function PageLayout(page) {
//   return (
//     <>
//       <Header />
//       {page}
//       <Footer position="absolute" bottom="bottom-0" />
//     </>
//   );
// };
export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;

  const { cookies } = req;

  return {
    props: {
      cookie: cookies,
    },
  };
};