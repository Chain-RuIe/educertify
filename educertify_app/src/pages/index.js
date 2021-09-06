import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { Typography } from "@material-ui/core";

export default function Main() {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(JSON.parse(JSON.parse(localStorage.getItem("token"))));
  }, []);
  return (
    <Layout>
      <Typography variant="h2">Welcome.</Typography>
      <Typography variant="body1">
        Upload your wallet and click on the above links - Sign or Verify - to
        get started.
      </Typography>
    </Layout>
  );
}
