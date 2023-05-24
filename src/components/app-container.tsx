import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Body from "./layouts/body";

const AppContainer = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* body */}
      <Body />
      {/* footer */}
      <Footer />
    </>
  );
};

export default AppContainer;
