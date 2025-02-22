import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else {
      localStorage.setItem("theme", "ayu-dark");
      document.documentElement.setAttribute(
        "data-theme",
        "ayu-dark"
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Harsh Dutt | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
