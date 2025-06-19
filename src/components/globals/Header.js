import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_PRIMARY_MENU } from '@/lib/queries';

async function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  
  const fetcher = async () => {
    const data = await fetchGraphQL(GET_PRIMARY_MENU);
    return data;
  };

  const data = await fetcher(); 
  const error = null;

  if (error) return <p>{error}</p>;

  const headerButton = data?.commonFields?.postFields?.headerSection?.headerButton;
  
  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="container px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex">
              {  data?.commonFields?.postFields?.headerSection?.siteLogo?.node?.sourceUrl && (
              <Link className="block" href="/">
                <Image
                  src={data?.commonFields?.postFields?.headerSection?.siteLogo?.node?.sourceUrl || '/images/logo.png'}
                  alt="Logo"
                  width={130}
                  height={40}
                  className="max-w-[130px]"
                />
              </Link>
              )} 
              { !data?.commonFields?.postFields?.headerSection?.siteLogo?.node?.sourceUrl && (
                <Link className="block" href="/">
                  <h1 className="text-2xl font-bold">{data?.commonFields?.postFields?.headerSection?.siteTitle}</h1>
                </Link>
              )}
            </div>
            <div className="lg:flex lg:items-center lg:gap-12">
              <DesktopMenu data={data} />
              <MobileMenu headerButton={headerButton} data={data} />
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
