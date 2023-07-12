import React from "react";

import "../css/style.scss";

import { SeoHead } from "./SeoHead";
import Hero from "./Hero";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <SeoHead />
    <Hero>
      <Header />
    </Hero>
    {children}
    <Footer />
  </>
);

export default Layout;
