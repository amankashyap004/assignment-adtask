"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import Container from "./Container";
import Button from "../ui/Button";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 md:top-4 left-0 right-0 w-full z-50">
      <Container className="!px-0 md:!px-12 lg:!px-20">
        <div className="flex justify-between items-center w-full h-full px-4 md:px-6 py-4 md:py-3 bg-[#363636]/30 md:bg-[#5C6069]/10 backdrop-blur border border-white/10 md:rounded-full">
          <div>
            <BrandLogo />
          </div>
          <div className="hidden lg:flex">
            <NavLinks isMobileMenuOpen={isMobileMenuOpen} />
          </div>
          <div className="lg:hidden flex justify-center items-center text-2xl">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-transparent">Log in</Button>
            <Button>Start Free Trial</Button>
          </div>
        </div>
      </Container>

      <div
        className={`fixed inset-0 flex lg:hidden bg-primary/50 backdrop-blur w-full h-screen z-[100] transform transition-all duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex flex-col gap-8 w-full h-full px-8 py-6 bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] backdrop-blur">
          <div className="flex w-full">
            <BrandLogo />
          </div>
          <div className="mt-4">
            <NavLinks isMobileMenuOpen={isMobileMenuOpen} />
          </div>
          <div className="flex flex-col w-2/3 gap-4 mt-4">
            <Button className="bg-transparent">Log in</Button>
            <Button>Start Free Trial</Button>
          </div>
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IoClose />
          </button>
        </div>
        <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;

const BrandLogo = () => (
  <Link href="/" className="flex items-center justify-center">
    <div className="w-20 lg:w-24">
      <Image
        src="/images/logo-white.png"
        alt="Logo"
        width={200}
        height={100}
        quality={100}
        className="object-contain w-full"
      />
    </div>
  </Link>
);

const navItems = [
  {
    name: "Products",
    href: "",
    subNav: [
      { name: "Optimize", href: "" },
      { name: "Competitor Research", href: "" },
      { name: "Content Analytics", href: "" },
      { name: "Social Listening", href: "" },
      { name: "Keyword Research", href: "" },
      { name: "AutoDetect", href: "" },
      { name: "Keyword Tracking", href: "" },
      { name: "Site Audit", href: "" },
      { name: "Keyword Clustering", href: "" },
    ],
  },
  {
    name: "Tools",
    href: "",
    subNav: [
      { name: "SEO Title Generator", href: "" },
      { name: "Website Ranking Checker", href: "" },
      { name: "SEO Keyword Generator", href: "" },
      { name: "Keyword Rank Checker", href: "" },
      { name: "Meta Description Generator", href: "" },
      { name: "Backlink Checker", href: "" },
      { name: "Blog Idea Generator", href: "" },
    ],
  },
  { name: "Contact Us", href: "" },
];

const NavLinks = ({
  className,
  isMobileMenuOpen,
}: {
  className?: string;
  isMobileMenuOpen: boolean;
}) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(
    null
  );

  return (
    <nav
      className={`flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-5 text-sm ${className}`}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div
            key={item.name}
            className={`md:relative `}
            onMouseEnter={() => setActiveMenu(item.name)}
          >
            <div className={`${mobileSubMenuOpen ? "hidden" : ""}`}>
              <button
                onClick={() => {
                  if (isMobileMenuOpen) {
                    setMobileSubMenuOpen(item.name);
                  } else {
                    setActiveMenu(item.name);
                  }
                }}
                className={`group flex  md:justify-center items-center gap-2 md:gap-1 transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                }`}
              >
                {item.name}
                {item.subNav && item.subNav.length > 0 && (
                  <div
                    className={`transition-transform duration-300 -rotate-90 md:rotate-0 group-hover:rotate-180 text-xl`}
                  >
                    <IoMdArrowDropdown />
                  </div>
                )}
              </button>
            </div>

            {/* Desktop*/}
            {item.subNav &&
              item.subNav.length > 0 &&
              activeMenu === item.name && (
                <div className="absolute top-16 md:top-14 left-0 md:left-1/2 md:-translate-x-1/2 md:transform transition-all duration-300 z-50 hidden md:block">
                  <div
                    onMouseLeave={() => setActiveMenu(null)}
                    className="flex flex-col md:flex-row justify-center items-start w-full md:min-w-[800px] gap-16 md:rounded-2xl px-4 py-4 md:px-16 md:py-16 text-nowrap
                  bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] backdrop-blur border border-white/10 "
                  >
                    <section className="md:w-1/3">
                      <p className="bg-gradient-to-tr from-[#333B4F] to-[#7687B5] bg-clip-text text-transparent font-semibold text-3xl">
                        {item.name}
                      </p>
                    </section>
                    <section className="w-2/3 grid md:grid-cols-2 gap-y-3 gap-x-16">
                      {item.subNav.map((subItem, index) => (
                        <div key={index}>
                          {index !== 0 && index !== 1 && (
                            <div className="w-full h-px bg-gradient-to-l from-[#263048] via-[#5C73AE] to-[#263048]"></div>
                          )}
                          <Link href={subItem.href}>
                            <p className="hover:bg-[#7687B5]/30 px-4 py-1.5 mt-3 rounded transition-all duration-300">
                              {subItem.name}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              )}

            {/* Mobile */}
            {item.subNav &&
              item.subNav.length > 0 &&
              mobileSubMenuOpen === item.name && (
                <div
                  className={`flex gap-4 w-full transition-all duration-300 z-50  ${
                    !mobileSubMenuOpen ? "hidden" : ""
                  }`}
                >
                  <button
                    className="flex gap-2 text-white text-3xl"
                    onClick={() => setMobileSubMenuOpen(null)}
                  >
                    <MdArrowBack />
                  </button>
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex items-center gap-4">
                      <p className="px-4 bg-gradient-to-tr from-[#333B4F] to-[#7687B5] bg-clip-text text-transparent font-semibold text-xl md:text-3xl">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex flex-col w-full text-nowrap gap-2">
                      {item.subNav.map((subItem, index) => (
                        <div key={index}>
                          {index !== 0 && (
                            <div className="w-full h-px bg-gradient-to-l from-[#263048] via-[#5C73AE] to-[#263048]"></div>
                          )}
                          <Link href={subItem.href}>
                            <p className="hover:bg-[#7687B5]/30 px-4 py-2 rounded transition-all duration-300 text-white">
                              {subItem.name}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        );
      })}
    </nav>
  );
};
