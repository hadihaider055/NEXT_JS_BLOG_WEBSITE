import "../styles/globals.css";
import "@material-tailwind/react/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { useStore } from "../state/store";

function MyApp({ Component, pageProps, cookie }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
