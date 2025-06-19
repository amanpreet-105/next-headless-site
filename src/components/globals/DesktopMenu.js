import React from 'react'
import Link from 'next/link'

function DesktopMenu({data}){

    return (
        <>
            <nav
                aria-label="Global"
                className='hidden lg:block'
              >
                <ul className={`flex items-center gap-10 text-lg font-semibold font-crimson `}>
                  { data?.menu?.menuItems?.nodes && data?.menu?.menuItems?.nodes.length > 0 && data?.menu?.menuItems?.nodes.map((item, index) => {
                    if (item.childItems && item.childItems.nodes && item.childItems.nodes.length > 0) {
                      return (
                        <li key={index} className="relative group"> 
                          <Link
                            className="transition-all duration-300 hover:text-primary flex items-center justify-between group"
                            href="#"
                          >
                            {item.label}
                            <svg
                              className="w-2.5 h-2.5 ms-2.5 group-hover:rotate-180 transition-transform duration-300 text-primary"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                              ></path>
                            </svg>
                          </Link>
                          <ul className="absolute -left-4 top-full hidden py-2 px-3 max-w-full min-w-60 group-hover:block bg-white divide-y-1 divide-gray-200 shadow-lg">
                            {item.childItems.nodes.map((child, childIndex) => (
                              <li key={childIndex} className="">
                                <Link
                                  className="flex py-2 px-3 hover:bg-primary hover:text-white"
                                  href={child.uri}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li key={index}> 
                          <Link
                            className="transition-all duration-300 hover:text-primary"
                            href={item.uri}
                            target={item.target}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </nav>
        </>
    );
}

export default DesktopMenu;