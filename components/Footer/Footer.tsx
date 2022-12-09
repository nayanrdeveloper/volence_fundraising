import React from "react";
import FooterCol1 from "./FooterCol1";
import FooterCol2 from "./FooterCol2";
import FooterCol3 from "./FooterCol3";
import FooterCol4 from "./FooterCol4";

function Footer() {
  return (
    <footer className="container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <FooterCol1 />
        <FooterCol2 />
        <FooterCol3 />
        <FooterCol4 />
      </div>
      <p className="py-5 border-t border-bg-global-green text-light-grey">Copyright © 2022 Volence | Powered by Volence</p>
    </footer>
  );
}

export default Footer;
