import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.asPath === href) {
    className = `${className} active`;
  } else {
    className = `${className} inactive`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
