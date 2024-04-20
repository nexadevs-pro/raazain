"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <section className="w-full bg-white">
    <div className="sticky top-0 z-10 py-2 px-6 flex gap-2 justify-between items-center bg-white max-sm:px-2  mx-auto max-w-7xl ">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={120} />
      </Link>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1  max-md:hidden"
        >
          <ShoppingCart className="text-primary" />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-red-1">
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-red-1"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-1"
            >
              Orders
            </Link>
            <Link
              href={user ? "/blog" : "/sign-in"}
              className="hover:text-red-1"
            >
              Blogs
            </Link>
            <Link
              href={user ? "/about" : "/sign-in"}
              className="hover:text-red-1"
            >
              About
            </Link>
            <Link
              href={user ? "/contact" : "/sign-in"}
              className="hover:text-red-1"
            >
              Contact
            </Link>
            <Link
              href={user ? "/faqs" : "/sign-in"}
              className="hover:text-red-1"
            >
              FAQs
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1"
            >
              <ShoppingCart className="text-primary" />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <User className="text-primary" />
          </Link>
        )}
      </div>
    </div>
    </section>
  );
};

export default Navbar;
