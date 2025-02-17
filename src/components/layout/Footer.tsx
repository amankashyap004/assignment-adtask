import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PiMapPinBold, PiEnvelopeSimple } from "react-icons/pi";
import Container from "./Container";

type LinkItem = {
  name: string;
  url: string;
};

type FooterSectionProps = {
  title: string;
  links: LinkItem[];
};

const utilitiesLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "" },
  { name: "Tools", url: "" },
  { name: "Contact Us", url: "" },
];

const socialsLinks = [
  { name: "X", url: "" },
  { name: "LinkedIn", url: "" },
  { name: "Instagram", url: "" },
  { name: "Facebook", url: "" },
];

const Footer = () => {
  return (
    <footer className="bg-[#050506] border-t border-[#333B4F]">
      <Container>
        <div className="flex flex-col gap-8 lg:gap-16 h-full w-full pt-8 md:pt-16 pb-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-8">
            <section className="order-2 md:order-1 flex justify-center items-center w-full">
              <div className="flex flex-col gap-8">
                <BrandLogo />
                <div className="flex flex-col gap-2 text-[#788199]">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-[#5C73AE]">
                      <PiEnvelopeSimple />
                    </div>
                    <Link href="mailto:contact@adtask.ai" className="text-xs">
                      contact@adtask.ai
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-[#5C73AE]">
                      <PiMapPinBold />
                    </div>
                    <p className="text-xs">San Francisco Bay Area</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <FooterSection title="Utilities" links={utilitiesLinks} />
                <FooterSection title="Socials" links={socialsLinks} />
              </div>
            </section>
          </div>
          <div>
            <p className="text-xs lg:text-sm text-center text-[#788199]">
              All rights reserved &copy; {new Date().getFullYear()} adTask
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-4 text-center">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.url}
            className="text-sm md:text-base opacity-60 hover:opacity-100"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const BrandLogo = () => (
  <Link href="/" className="">
    <div className="w-40 md:w-72 lg:w-80">
      <Image
        src="/images/logo-footer.png"
        alt="Logo"
        width={200}
        height={100}
        quality={100}
        className="object-contain w-full"
      />
    </div>
  </Link>
);
