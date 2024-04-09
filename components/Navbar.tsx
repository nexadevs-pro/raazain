import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Image
          src={"Raazain logo SVG-01.svg"}
          alt="aa"
          height={150}
          width={150}
        />
        <div className="space-x-4 flex flex-row">
          <Link href={"https://www.instagram.com/raazain.store/"}>
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
          </Link>
          <Link
            href={
              "https://twitter.com/i/flow/login?redirect_after_login=%2Fraazainuae"
            }
          >
            <FaXTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F101499627%2Fadmin%2F"
            }
          >
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>
          <Link href={"https://www.tiktok.com/@raazain.store"}>
            <FaTiktok className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>
          <Link href={"https://www.pinterest.com/raazainstore/"}>
            <FaPinterest className="hover:text-primary text-2xl cursor-pointer" />
          </Link>
          <Link href={"https://www.facebook.com/raazain.uae"}>
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};
