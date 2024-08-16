import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/images/Logo.svg"
          alt="Logo"
          width={198}
          height={46}
          className="object-contain"
        />
      </Link>
    </>
  );
};

export default Logo;
