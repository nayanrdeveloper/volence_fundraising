import Link from "next/link";
import React from "react";
import { FaDotCircle } from "react-icons/fa";

function FooterCol3() {
  interface footerStruct {
    name: string;
    to: string;
  }
  const footerCol2List: footerStruct[] = [
    {
      name: "About",
      to: "/",
    },
    {
      name: "Team",
      to: "/",
    },
    {
      name: "Contact",
      to: "/",
    },
  ];
  return (
    <div className="p-3 md:p-0">
      <h5 className="font-semibold text-global-primary" >Company</h5>
      <ul className="mt-5 flex flex-col gap-2">
        {footerCol2List.map((footerData, index) => {
          return (
            <li key={index} className="flex gap-2 items-center">
              <FaDotCircle className="text-global-green" />
              <Link href={footerData.to} className="text-light-grey">
                {footerData.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterCol3;
