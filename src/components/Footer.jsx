// src/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black shadow-2xl py-6 mt-10">
      <h1 className='text-center text-2xl'>Gadget Heaven</h1>
      <p className='text-center'>Leading the way in cutting-edge technology and innovation.</p>
      <br />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-cols-3  gap-6 md:pl-44">
          <div>
            <h6 className="text-lg font-semibold mb-4">Services</h6>
            <ul>
              <li><a href="#" className="hover:underline">Branding</a></li>
              <li><a href="#" className="hover:underline">Design</a></li>
              <li><a href="#" className="hover:underline">Marketing</a></li>
          
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Company</h6>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4  ">Legal</h6>
            <ul>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">© 2023 Gadget Heaven. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;