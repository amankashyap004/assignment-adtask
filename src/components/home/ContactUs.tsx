import React from "react";
import Container from "../layout/Container";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-full gap-8 md:gap-16">
        <div>
          <div className="px-6 py-3 bg-gradient-to-r from-[#8E8D8D]/20 to-[#282828]/20 rounded-full">
            <p className="uppercase font-medium text-xs">Contact Us</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-40">
          <section className="relative flex flex-col gap-4 md:gap-12">
            <div className="absolute top-[40%] left-1/3 transform -translate-x-1/2 -translate-y-[40%] bg-[#D9D9D9] opacity-50 w-44 h-24 md:w-52 md:h-28 blur-3xl rounded-full z-10"></div>
            <div className="absolute top-[40%] left-1/3 transform -translate-x-1/2 -translate-y-[40%] bg-[#263048] w-56 h-28 md:w-80 md:h-36 blur-3xl rounded-full z-10"></div>
            <div className="flex flex-col font-medium text-xl md:text-3xl z-20">
              <h2>Ask whatever you have</h2>
              <h2 className="bg-gradient-to-tr from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent">
                in your mind now
              </h2>
            </div>
            <div className="z-20">
              <p className="text-[10px] md:text-sm lg:w-2/3">
                Whether you have questions or are ready to discuss your
                business, we're here to help. Reach out today.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full z-20">
              <div className="flex items-center gap-2">
                <div className="w-4 md:w-6">
                  <Image
                    src="/images/icons/icon-envelope.png"
                    alt="Image"
                    width={100}
                    height={100}
                    quality={100}
                    className="object-contain w-full"
                  />
                </div>
                <Link href="mailto:contact@adtask.ai" className="text-xs">
                  contact@adtask.ai
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 md:w-6">
                  <Image
                    src="/images/icons/icon-phone.png"
                    alt="Image"
                    width={100}
                    height={100}
                    quality={100}
                    className="object-contain w-full"
                  />
                </div>
                <Link href="tel:9698198061" className="text-xs">
                  (969) 819-8061
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 md:w-6">
                  <Image
                    src="/images/icons/icon-address-marker.png"
                    alt="Image"
                    width={100}
                    height={100}
                    quality={100}
                    className="object-contain w-full"
                  />
                </div>
                <div className="text-xs">San Francisco Bay Area</div>
              </div>
            </div>
          </section>
          <section>
            <form action="" className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs md:text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-2 rounded  bg-transparent border border-[#333B4F] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs md:text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 rounded  bg-transparent border border-[#333B4F] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs md:text-sm">
                  Name
                </label>
                <textarea
                  id="name"
                  className="px-4 py-2 min-h-32 rounded  bg-transparent border border-[#333B4F] outline-none"
                />
              </div>

              <div className="flex justify-center items-center mt-4 md:mt-0">
                <Button>Submit</Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
