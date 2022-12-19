import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterCol1() {
  return (
    <div className="flex flex-col gap-2 p-3 md:p-2">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          className="mr-3 h-10 w-28"
          alt="Logo"
          width={120}
          height={120}
        />
      </Link>
      <p className="text-light-grey mt-1 dark:(text-global-grey-dark)">
        Volence mission is to empower people to unite around ideas that
        matter to them and together make those ideas come to life.
      </p>
    </div>
  );
}

export default FooterCol1;
