import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  XIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

import { signIn, signOut, useSession } from "next-auth/client";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Hover from "./Hover";

function Header() {
  const [sidebaropen, setSidebaropen] = useState(false);
  const handleToggle = () => {
    setSidebaropen((prevSidebaropen) => !prevSidebaropen);
    document.body.style.overflow = "hidden";
  };
  const handleClose = () => {
    setSidebaropen((prevSidebaropen) => !prevSidebaropen);
    document.body.style.overflow = "unset";
  };

  //

  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="relative">
      {/* sidebar */}
      <div
        className="bg-white absolute h-screen duration-100  z-50 overflow-x-hidden overflow-y-scroll "
        style={sidebaropen ? { left: "0px" } : { left: "-500px" }}
      >
        {/* <XIcon className="absolute h-8 text-white -right-8 top-2 cursor-pointer" onClick={handleClose}/> */}
        <div className="bg-amazon_blue-light w-full h-12 flex items-center">
          <div className=" mx-4 flex items-center space-x-4 text-white font-bold">
            <UserCircleIcon className="h-8 text-white " />
            <p>Hello, {session ? `${session.user.name}` : " "}</p>
          </div>
          <XIcon
            className="h-8 text-white ml-20 cursor-pointer"
            onClick={handleClose}
          />
        </div>

        <div className="flex flex-col space-y-4">
          <ul className="mt-6 border-b-2 border-gray-300">
            <p className="font-bold ml-6 text-lg">Trending</p>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 cursor-pointer">
              Best Sellers
            </li>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              new releases
            </li>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              movers and shakers
            </li>
          </ul>
          <ul className="mt-6 border-b-2 border-gray-300">
            <p className="font-bold ml-6 text-lg">
              Digital Content and Devices
            </p>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Echo & Alexa
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Fire TV
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Kindle E-Readers & eBooks
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Audible Audiobooks
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Amazon Prime Video
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Amazon Prime Music
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
          </ul>
          <ul className="mt-6 border-b-2 border-gray-300">
            <p className="font-bold ml-6 text-lg">Shop By Department</p>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Mobiles, Computers
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              TV, Appliances, Electronics
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Men's Fashion
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-between items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Women's Fashion
              <ChevronRightIcon className="h-4 text-gray-500 " />
            </li>
            <li className="py-2 w-ful flex justify-items-start items-center text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              See all
              <ChevronDownIcon className="h-4 ml-2 text-gray-500 " />
            </li>
          </ul>
          <ul className="mt-6 border-b-2 border-gray-300">
            <p className="font-bold ml-6 text-lg">Programs & Features</p>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Gift Cards & Mobile Recharges
            </li>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Flight Tickets
            </li>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              #FoundItOnAmazon
            </li>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              Full Store Directory
            </li>
          </ul>

          <ul className="mt-6  ">
            <p className="font-bold ml-6 text-lg">help &amp; settings</p>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              your account
            </li>
            <li className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer">
              customer service
            </li>
            <li
              onClick={!session ? signIn : signOut}
              className="py-2 w-ful text-xm hover:bg-gray-300 px-6 capitalize cursor-pointer"
            >
              {!session ? "Sign In" : "Sign Out"}
            </li>
          </ul>
        </div>
      </div>

      <div
        className="absolute overflow-hidden left-0 right-0 h-screen bg-black opacity-70 z-40"
        style={
          sidebaropen ? { visibility: "visible" } : { visibility: "hidden" }
        }
        onClick={handleClose}
      ></div>

      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Acount &Lists</p>
          </div>
          <div onClick={() => router.push('/orders')} className="link">
            <p>Retuns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div class="group inline-block relative z-50">
            <div
              onClick={() => router.push("/checkout")}
              className="relative link flex items-center"
            >
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
            </div>

            <ul onClick={() => router.push("/checkout")} className="absolute -left-20 hidden text-gray-700 pt-1 group-hover:block w-48">
              <li className="">
                <a
                  className="rounded-t bg-white py-2 px-4 block whitespace-no-wrap"
                  
                >
                  <Hover/>
                </a>
              </li>
              {/* <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Three is the magic number
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* bottom nav */}

      <div className="flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white text-xs">
        <p onClick={handleToggle} className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Groceary</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
