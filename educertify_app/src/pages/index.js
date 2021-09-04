import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import styles from "../styles/Home.module.css";
import { getTaquito } from "../helpers/taquito.js";

export default function Main() {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(JSON.parse(JSON.parse(localStorage.getItem("token"))));
  }, []);
  return (
    <Layout>
      <div className={styles.container}>Main Page</div>
      <button
        onClick={() => {
          getTaquito(token);
        }}
      >
        Click
      </button>
    </Layout>
  );
}
