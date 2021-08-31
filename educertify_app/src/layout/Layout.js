import React from "react";
import AppBar from "./AppBar";
import Body from "./Body";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>EduCertify</title>
        <meta
          name="description"
          content="EduCertify - a dApp that helps with verifying education certificates"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <Body>{children}</Body>
    </>
  );
}
