"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function Faq() {
  useEffect(() => {
    // Initialize the first accordion as open
    const firstContent = document.querySelector(".accordion-content");
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";

    document.querySelectorAll(".accordion-button").forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector(".arrow");

        // Close all accordions and remove background class
        document.querySelectorAll(".accordion-content").forEach((el) => {
          if (el !== content) {
            el.style.maxHeight = "0px";
          }
        });

        document.querySelectorAll(".accordion-button").forEach((btn) => {
          btn.classList.remove("text-primary");
          btn.classList.add("text-gray-800");
        });

        document.querySelectorAll(".accordion-button .arrow").forEach((svg) => {
          if (svg !== icon) {
            svg.classList.remove("rotate-180");
          }
        });

        // Toggle the clicked accordion
        if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.classList.add("rotate-180");
          button.classList.add("text-primary");
          button.classList.remove("text-gray-800");
        } else {
          content.style.maxHeight = "0px";
          icon.classList.remove("rotate-180");
          button.classList.remove("text-primary");
          button.classList.add("text-gray-800");
        }
      });
    });
  }, []);
  
const pathname = usePathname();
const isFaqPage = pathname === "/faq";
  return (
    <>
      <section
        className={`section-padding ${isFaqPage ? "" : "bg-gray-100/70"}`}
      >
        <div className="container">
          <div className="mb-7">
            <h2 className="h2-title !mb-0 text-center">
              <span>Frequently</span> Asked Questions
            </h2>
          </div>
          {/* accordion start */}
          <div className="max-w-5xl mx-auto space-y-5">
            <div
              className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] border-l-8 border-primary/55 bg-white"
              role="accordion"
            >
              <button
                type="button"
                className="accordion-button cursor-pointer w-full text-[15px] font-semibold text-left py-5 px-6 text-primary flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-8 mr-4 shrink-0"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M227.656 357.508a15.13 15.13 0 0 0 10.692 4.426c4.007 0 7.851-1.59 10.687-4.426l53.973-53.973c5.906-5.906 5.906-15.476 0-21.383-5.903-5.902-15.477-5.902-21.38 0l-43.28 43.282-19.735-19.735c-5.906-5.902-15.476-5.902-21.383 0-5.902 5.903-5.902 15.477 0 21.383zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M250.121 439.844c66.176 0 120.012-53.84 120.012-120.016S316.297 199.816 250.12 199.816c-66.18 0-120.016 53.836-120.016 120.012s53.84 120.016 120.016 120.016zm0-209.793c49.504 0 89.777 40.273 89.777 89.777s-40.273 89.781-89.777 89.781-89.781-40.277-89.781-89.78 40.277-89.778 89.781-89.778zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M451.344 32.191H423.77V15.117C423.77 6.77 417 0 408.652 0s-15.117 6.77-15.117 15.117v17.074h-29.707V15.117C363.828 6.77 357.058 0 348.707 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H166.652V15.117c0-8.347-6.77-15.117-15.12-15.117-8.348 0-15.118 6.77-15.118 15.117v17.074h-29.707V15.117C106.707 6.77 99.937 0 91.586 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H48.89C21.934 32.191 0 54.125 0 81.086v382.023C0 490.066 21.934 512 48.89 512h402.454c26.96 0 48.89-21.934 48.89-48.89V81.085c0-26.961-21.933-48.895-48.89-48.895zm18.652 430.918c0 10.286-8.367 18.657-18.652 18.657H48.89c-10.286 0-18.657-8.371-18.657-18.657V157.9h439.762zM30.234 81.086c0-10.29 8.371-18.656 18.657-18.656h27.578v17.074c0 8.348 6.77 15.117 15.12 15.117 8.348 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.121 15.117 8.348 0 15.117-6.77 15.117-15.117V62.43H333.59v17.074c0 8.348 6.77 15.117 15.12 15.117 8.349 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.117 15.117 8.352 0 15.121-6.77 15.121-15.117V62.43h27.57C461.63 62.43 470 70.797 470 81.086v46.574H30.234zm0 0"
                    data-original="#000000"
                  />
                </svg>
                <span className="mr-4">
                  Are there any special discounts or promotions available during
                  the event.
                  <span className="text-xs mt-0.5 block font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px] arrow fill-current ml-auto shrink-0 transition-all duration-300 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div className="accordion-content overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 px-6">
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor auctor arcu, at fermentum dui. Maecenas vestibulum a
                    turpis in lacinia. Proin aliquam turpis at erat venenatis
                    malesuada. Sed semper, justo vitae consequat fermentum,
                    felis diam posuere ante, sed fermentum quam justo in dui.
                    Nulla facilisi. Nulla aliquam auctor purus, vitae dictum
                    dolor sollicitudin vitae. Sed bibendum purus in efficitur
                    consequat. Fusce et tincidunt arcu. Curabitur ac lacus
                    lectus. Morbi congue facilisis sapien, a semper orci
                    facilisis in.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] border-l-8 border-primary/55 bg-white"
              role="accordion"
            >
              <button
                type="button"
                className="accordion-button cursor-pointer w-full text-[15px] font-semibold text-left py-5 px-6 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-8 mr-4 shrink-0"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M227.656 357.508a15.13 15.13 0 0 0 10.692 4.426c4.007 0 7.851-1.59 10.687-4.426l53.973-53.973c5.906-5.906 5.906-15.476 0-21.383-5.903-5.902-15.477-5.902-21.38 0l-43.28 43.282-19.735-19.735c-5.906-5.902-15.476-5.902-21.383 0-5.902 5.903-5.902 15.477 0 21.383zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M250.121 439.844c66.176 0 120.012-53.84 120.012-120.016S316.297 199.816 250.12 199.816c-66.18 0-120.016 53.836-120.016 120.012s53.84 120.016 120.016 120.016zm0-209.793c49.504 0 89.777 40.273 89.777 89.777s-40.273 89.781-89.777 89.781-89.781-40.277-89.781-89.78 40.277-89.778 89.781-89.778zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M451.344 32.191H423.77V15.117C423.77 6.77 417 0 408.652 0s-15.117 6.77-15.117 15.117v17.074h-29.707V15.117C363.828 6.77 357.058 0 348.707 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H166.652V15.117c0-8.347-6.77-15.117-15.12-15.117-8.348 0-15.118 6.77-15.118 15.117v17.074h-29.707V15.117C106.707 6.77 99.937 0 91.586 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H48.89C21.934 32.191 0 54.125 0 81.086v382.023C0 490.066 21.934 512 48.89 512h402.454c26.96 0 48.89-21.934 48.89-48.89V81.085c0-26.961-21.933-48.895-48.89-48.895zm18.652 430.918c0 10.286-8.367 18.657-18.652 18.657H48.89c-10.286 0-18.657-8.371-18.657-18.657V157.9h439.762zM30.234 81.086c0-10.29 8.371-18.656 18.657-18.656h27.578v17.074c0 8.348 6.77 15.117 15.12 15.117 8.348 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.121 15.117 8.348 0 15.117-6.77 15.117-15.117V62.43H333.59v17.074c0 8.348 6.77 15.117 15.12 15.117 8.349 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.117 15.117 8.352 0 15.121-6.77 15.121-15.117V62.43h27.57C461.63 62.43 470 70.797 470 81.086v46.574H30.234zm0 0"
                    data-original="#000000"
                  />
                </svg>
                <span className="mr-4">
                  1 What are the dates and locations for the product launch
                  events?
                  <span className="text-xs mt-0.5 block font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px] arrow fill-current ml-auto shrink-0 transition-all duration-300"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                <div className="pb-5 px-6">
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor auctor arcu, at fermentum dui. Maecenas vestibulum a
                    turpis in lacinia. Proin aliquam turpis at erat venenatis
                    malesuada. Sed semper, justo vitae consequat fermentum,
                    felis diam posuere ante, sed fermentum quam justo in dui.
                    Nulla facilisi. Nulla aliquam auctor purus, vitae dictum
                    dolor sollicitudin vitae. Sed bibendum purus in efficitur
                    consequat. Fusce et tincidunt arcu. Curabitur ac lacus
                    lectus. Morbi congue facilisis sapien, a semper orci
                    facilisis in.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] border-l-8 border-primary/55 bg-white"
              role="accordion"
            >
              <button
                type="button"
                className="accordion-button cursor-pointer w-full text-[15px] font-semibold text-left py-5 px-6 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-8 mr-4 shrink-0"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M227.656 357.508a15.13 15.13 0 0 0 10.692 4.426c4.007 0 7.851-1.59 10.687-4.426l53.973-53.973c5.906-5.906 5.906-15.476 0-21.383-5.903-5.902-15.477-5.902-21.38 0l-43.28 43.282-19.735-19.735c-5.906-5.902-15.476-5.902-21.383 0-5.902 5.903-5.902 15.477 0 21.383zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M250.121 439.844c66.176 0 120.012-53.84 120.012-120.016S316.297 199.816 250.12 199.816c-66.18 0-120.016 53.836-120.016 120.012s53.84 120.016 120.016 120.016zm0-209.793c49.504 0 89.777 40.273 89.777 89.777s-40.273 89.781-89.777 89.781-89.781-40.277-89.781-89.78 40.277-89.778 89.781-89.778zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M451.344 32.191H423.77V15.117C423.77 6.77 417 0 408.652 0s-15.117 6.77-15.117 15.117v17.074h-29.707V15.117C363.828 6.77 357.058 0 348.707 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H166.652V15.117c0-8.347-6.77-15.117-15.12-15.117-8.348 0-15.118 6.77-15.118 15.117v17.074h-29.707V15.117C106.707 6.77 99.937 0 91.586 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H48.89C21.934 32.191 0 54.125 0 81.086v382.023C0 490.066 21.934 512 48.89 512h402.454c26.96 0 48.89-21.934 48.89-48.89V81.085c0-26.961-21.933-48.895-48.89-48.895zm18.652 430.918c0 10.286-8.367 18.657-18.652 18.657H48.89c-10.286 0-18.657-8.371-18.657-18.657V157.9h439.762zM30.234 81.086c0-10.29 8.371-18.656 18.657-18.656h27.578v17.074c0 8.348 6.77 15.117 15.12 15.117 8.348 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.121 15.117 8.348 0 15.117-6.77 15.117-15.117V62.43H333.59v17.074c0 8.348 6.77 15.117 15.12 15.117 8.349 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.117 15.117 8.352 0 15.121-6.77 15.121-15.117V62.43h27.57C461.63 62.43 470 70.797 470 81.086v46.574H30.234zm0 0"
                    data-original="#000000"
                  />
                </svg>
                <span className="mr-4">
                  Can I bring a guest with me to the product launch event?
                  <span className="text-xs mt-0.5 block font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px] arrow fill-current ml-auto shrink-0 transition-all duration-300"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                <div className="pb-5 px-6">
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor auctor arcu, at fermentum dui. Maecenas vestibulum a
                    turpis in lacinia. Proin aliquam turpis at erat venenatis
                    malesuada. Sed semper, justo vitae consequat fermentum,
                    felis diam posuere ante, sed fermentum quam justo in dui.
                    Nulla facilisi. Nulla aliquam auctor purus, vitae dictum
                    dolor sollicitudin vitae. Sed bibendum purus in efficitur
                    consequat. Fusce et tincidunt arcu. Curabitur ac lacus
                    lectus. Morbi congue facilisis sapien, a semper orci
                    facilisis in.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] border-l-8 border-primary/55 bg-white"
              role="accordion"
            >
              <button
                type="button"
                className="accordion-button cursor-pointer w-full text-[15px] font-semibold text-left py-5 px-6 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-8 mr-4 shrink-0"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M227.656 357.508a15.13 15.13 0 0 0 10.692 4.426c4.007 0 7.851-1.59 10.687-4.426l53.973-53.973c5.906-5.906 5.906-15.476 0-21.383-5.903-5.902-15.477-5.902-21.38 0l-43.28 43.282-19.735-19.735c-5.906-5.902-15.476-5.902-21.383 0-5.902 5.903-5.902 15.477 0 21.383zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M250.121 439.844c66.176 0 120.012-53.84 120.012-120.016S316.297 199.816 250.12 199.816c-66.18 0-120.016 53.836-120.016 120.012s53.84 120.016 120.016 120.016zm0-209.793c49.504 0 89.777 40.273 89.777 89.777s-40.273 89.781-89.777 89.781-89.781-40.277-89.781-89.78 40.277-89.778 89.781-89.778zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M451.344 32.191H423.77V15.117C423.77 6.77 417 0 408.652 0s-15.117 6.77-15.117 15.117v17.074h-29.707V15.117C363.828 6.77 357.058 0 348.707 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H166.652V15.117c0-8.347-6.77-15.117-15.12-15.117-8.348 0-15.118 6.77-15.118 15.117v17.074h-29.707V15.117C106.707 6.77 99.937 0 91.586 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H48.89C21.934 32.191 0 54.125 0 81.086v382.023C0 490.066 21.934 512 48.89 512h402.454c26.96 0 48.89-21.934 48.89-48.89V81.085c0-26.961-21.933-48.895-48.89-48.895zm18.652 430.918c0 10.286-8.367 18.657-18.652 18.657H48.89c-10.286 0-18.657-8.371-18.657-18.657V157.9h439.762zM30.234 81.086c0-10.29 8.371-18.656 18.657-18.656h27.578v17.074c0 8.348 6.77 15.117 15.12 15.117 8.348 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.121 15.117 8.348 0 15.117-6.77 15.117-15.117V62.43H333.59v17.074c0 8.348 6.77 15.117 15.12 15.117 8.349 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.117 15.117 8.352 0 15.121-6.77 15.121-15.117V62.43h27.57C461.63 62.43 470 70.797 470 81.086v46.574H30.234zm0 0"
                    data-original="#000000"
                  />
                </svg>
                <span className="mr-4">
                  How can I access the presentation materials after the event?
                  <span className="text-xs mt-0.5 block font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px] arrow fill-current ml-auto shrink-0 transition-all duration-300"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                <div className="pb-5 px-6">
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor auctor arcu, at fermentum dui. Maecenas vestibulum a
                    turpis in lacinia. Proin aliquam turpis at erat venenatis
                    malesuada. Sed semper, justo vitae consequat fermentum,
                    felis diam posuere ante, sed fermentum quam justo in dui.
                    Nulla facilisi. Nulla aliquam auctor purus, vitae dictum
                    dolor sollicitudin vitae. Sed bibendum purus in efficitur
                    consequat. Fusce et tincidunt arcu. Curabitur ac lacus
                    lectus. Morbi congue facilisis sapien, a semper orci
                    facilisis in.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] border-l-8 border-primary/55 bg-white"
              role="accordion"
            >
              <button
                type="button"
                className="accordion-button cursor-pointer w-full text-[15px] font-semibold text-left py-5 px-6 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-8 mr-4 shrink-0"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M227.656 357.508a15.13 15.13 0 0 0 10.692 4.426c4.007 0 7.851-1.59 10.687-4.426l53.973-53.973c5.906-5.906 5.906-15.476 0-21.383-5.903-5.902-15.477-5.902-21.38 0l-43.28 43.282-19.735-19.735c-5.906-5.902-15.476-5.902-21.383 0-5.902 5.903-5.902 15.477 0 21.383zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M250.121 439.844c66.176 0 120.012-53.84 120.012-120.016S316.297 199.816 250.12 199.816c-66.18 0-120.016 53.836-120.016 120.012s53.84 120.016 120.016 120.016zm0-209.793c49.504 0 89.777 40.273 89.777 89.777s-40.273 89.781-89.777 89.781-89.781-40.277-89.781-89.78 40.277-89.778 89.781-89.778zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M451.344 32.191H423.77V15.117C423.77 6.77 417 0 408.652 0s-15.117 6.77-15.117 15.117v17.074h-29.707V15.117C363.828 6.77 357.058 0 348.707 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H166.652V15.117c0-8.347-6.77-15.117-15.12-15.117-8.348 0-15.118 6.77-15.118 15.117v17.074h-29.707V15.117C106.707 6.77 99.937 0 91.586 0c-8.348 0-15.117 6.77-15.117 15.117v17.074H48.89C21.934 32.191 0 54.125 0 81.086v382.023C0 490.066 21.934 512 48.89 512h402.454c26.96 0 48.89-21.934 48.89-48.89V81.085c0-26.961-21.933-48.895-48.89-48.895zm18.652 430.918c0 10.286-8.367 18.657-18.652 18.657H48.89c-10.286 0-18.657-8.371-18.657-18.657V157.9h439.762zM30.234 81.086c0-10.29 8.371-18.656 18.657-18.656h27.578v17.074c0 8.348 6.77 15.117 15.12 15.117 8.348 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.121 15.117 8.348 0 15.117-6.77 15.117-15.117V62.43H333.59v17.074c0 8.348 6.77 15.117 15.12 15.117 8.349 0 15.118-6.77 15.118-15.117V62.43h29.707v17.074c0 8.348 6.77 15.117 15.117 15.117 8.352 0 15.121-6.77 15.121-15.117V62.43h27.57C461.63 62.43 470 70.797 470 81.086v46.574H30.234zm0 0"
                    data-original="#000000"
                  />
                </svg>
                <span className="mr-4">
                  Will there be food and refreshments provided at the event?
                  <span className="text-xs mt-0.5 block font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px] arrow fill-current ml-auto shrink-0 transition-all duration-300"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                <div className="pb-5 px-6">
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor auctor arcu, at fermentum dui. Maecenas vestibulum a
                    turpis in lacinia. Proin aliquam turpis at erat venenatis
                    malesuada. Sed semper, justo vitae consequat fermentum,
                    felis diam posuere ante, sed fermentum quam justo in dui.
                    Nulla facilisi. Nulla aliquam auctor purus, vitae dictum
                    dolor sollicitudin vitae. Sed bibendum purus in efficitur
                    consequat. Fusce et tincidunt arcu. Curabitur ac lacus
                    lectus. Morbi congue facilisis sapien, a semper orci
                    facilisis in.
                  </p>
                </div>
              </div>
            </div>

            {/* view more */}
            <div className={`text-center mt-12 ${isFaqPage ? "hidden" : ""}`}>
              <Link href="#" className="custom-button">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
