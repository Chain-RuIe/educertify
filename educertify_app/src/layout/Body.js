import React from "react";

export default function Body({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <div style={{ maxWidth: "1200px" }}>{children}</div>
    </div>
  );
}
