import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
  return <div className="mt-28"></div>;
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer position="absolute" bottom="bottom-0" />
    </>
  );
};
