import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NotFound() {
  return (
    <>
      <section className="bg-white">
        <div className="container min-h-[50vh] px-6 py-12 lg:flex lg:items-center lg:gap-12 max-lg:text-center">
          <div className="wf-ull lg:w-1/2">
            <p className="text-xl font-medium text-primary font-crimson">
              404 Error
            </p>
            <h1 className="mt-3 text-2xl font-semibold md:text-3xl font-crimson">
              Page not found
            </h1>
            <p className="mt-4">
              Sorry, the page you are looking for doesn't exist.Here are some
              helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3 max-lg:justify-center">
              <Link href="/" className="custom-button">
                Back To Home
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image
              className="w-full max-w-lg mx-auto"
              src="/images/404.svg"
              alt=""
              width={500}
              height={160}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;