import React from 'react';
import bloodDonationImage from "../assets/bloodDonationImage.png";

const AboutUs = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              We are dedicated to saving lives through blood donation. Our mission is to connect donors with those in need, ensuring a stable and safe blood supply for our community.
            </p>
            <div className="mt-8 space-y-4">
              <p className="flex items-center text-gray-600">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Organize regular blood donation drives
              </p>
              <p className="flex items-center text-gray-600">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Educate the public about the importance of blood donation
              </p>
              <p className="flex items-center text-gray-600">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Provide support to blood recipients and their families
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-[500px]">
            <img
              className="rounded-lg shadow-lg object-cover object-center"
              src={bloodDonationImage}
              alt="Blood donation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
