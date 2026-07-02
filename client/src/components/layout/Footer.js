import React from "react";

export default () => {
  return (
    <footer
      style={{
        backgroundColor: "#0b1326",
        color: "#fff",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      <h6>Copyright &copy; {new Date().getFullYear()} DevCon</h6>
      <h6>Developed By Ashish Singh Rawat</h6>
    </footer>
  );
};