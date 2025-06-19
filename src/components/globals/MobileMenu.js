'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from "next/navigation";

function MobileMenu({headerButton, data}) {
  let pathname = usePathname();
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}></div> */}

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          { headerButton && headerButton.uri && (
            <Link className="custom-button" href={headerButton?.uri ?? '#'} target={headerButton?.target}>
              {headerButton?.title}
            </Link>
          )}
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary p-3 text-white transition-all duration-500"
          >
            <svg
              className={`fill-current size-7 ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current size-7 ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden ease-in-out duration-300 fixed top-0 w-full max-w-[400px] max-lg:flex h-screen flex-col justify-between border-e border-gray-200 bg-white ${
          isOpen ? "flex left-0" : "hidden -left-full"
        }`}
      >
        <div className="">
          <div className="px-4 py-6">
            <div className="flex justify-center">
              <Link className="block" href="/" onClick={() => setIsOpen(!isOpen)}>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={130}
                  height={40}
                  className="max-w-[130px]"
                />
              </Link>
            </div>

            <ul className="mt-6 divide-y-1 divide-gray-200">
              { data?.menu?.menuItems?.nodes && data?.menu?.menuItems?.nodes.length > 0 && data?.menu?.menuItems?.nodes.map((item, index) => {
                let uri = item?.uri;
                if (uri.endsWith('/') && uri !== '/') {
                  uri = uri.slice(0, -1);
                }
                if (item.childItems && item.childItems.nodes && item.childItems.nodes.length > 0) {
                  
                  return (
                  <li key={index}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-4 py-2 text-black hover:bg-primary focus:bg-primary active:bg-primary hover:text-white focus:text-white active:text-white">
                        <span className="text-sm font-medium"> Services </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <ul className="mt-2 space-y-1 px-4 divide-y-1 divide-gray-200">
                        {item.childItems.nodes.map((child, childIndex) => {
                          let childuri = child?.uri;
                          if (childuri.endsWith('/') && childuri !== '/') {
                            childuri = childuri.slice(0, -1);
                          }
                          if(childuri.length > 0 && childuri != '#'){
                           return (<li key={childIndex} >
                            <Link
                              onClick={() => setIsOpen(!isOpen)}
                              href={ childuri ?? '#'}
                              className={`block px-4 py-2 text-sm font-medium text-black hover:bg-primary focus:bg-primary active:bg-primary hover:text-white focus:text-white active:text-white ${ pathname == childuri ? 'text-white bg-primary' : 'text-black '}`}
                            >
                              {child.label}
                            </Link>
                          </li>
                          )}})}
                      </ul>
                    </details>
                  </li>
                );
              } else {
                  return (
                    <li key={index}>
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        href={ uri ?? '#'}
                        className={`block px-4 py-2 text-sm font-medium text-black hover:bg-primary focus:bg-primary active:bg-primary hover:text-white focus:text-white active:text-white ${ pathname == uri ? 'text-white bg-primary' : 'text-black '}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;