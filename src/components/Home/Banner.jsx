import Image from "next/image";
import React from "react";
import Container from "../Shared/Container";
import PrimaryButton from "../Button/PrimaryButton";

const Banner = () => {
  return (
    <div className="bg-accent">
      <Container>
        <div className=" py-10 px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text Section */}
          <div className="max-w-lg mb-6 lg:mb-0">
            <p className="text-gray-600 uppercase tracking-wide">
              Welcome to Ultraclean
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
              UltraClean Pros: The Ultimate Clean for Every Space
            </h1>
            <p className="text-gray-700 mt-4">
              We are committed to delivering exceptional cleaning services that
              leave your spaces sparkling clean and hygienic.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <PrimaryButton text="Make An Appointment" />
              <button className="flex items-center text-blue-600 py-3 px-6 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                Watch Services Intro
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex-shrink-0 max-w-xl">
            <div className="relative flex justify-between items-start">
              <Image
                src="/images/Banner1.svg"
                alt="Cleaning Staff 1"
                width={268}
                height={324}
                className="rounded-lg object-cover"
              />

              {/* Overlay Image */}
              <div className="absolute -bottom-10 -right-7 transform translate-x-12 translate-y-12">
                <Image
                  src="/images/Banner2.svg"
                  alt="Cleaning Staff 2"
                  width={220}
                  height={324}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Satisfied Customers */}
            <div className="absolute -bottom-5 left-0 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
              <div>
                <p className="text-sm text-gray-600">Satisfied customers</p>
                <p className="font-semibold text-gray-900">100K+</p>
              </div>
              <div className="flex -space-x-2">
                <Image
                  src="/images/Banner2.svg"
                  alt="Cleaning Staff 2"
                  width={20}
                  height={20}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="absolute top-4 -right-7 bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-.01l.011-4h-1m0 4h-1v-4h-.01l.011-4h-1m10 0h.01l-.01 4H9m0 4v4a2 2 0 002 2h8a2 2 0 002-2v-4m-2-10a2 2 0 00-2-2h-8a2 2 0 00-2 2v4m0 4h10M5 21h14M9 9H5m10 0h4"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
