import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import { motion } from "motion/react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      {/* Additional Section */}
      <section className="bg-grey-200 w-full py-40 mt-16">
        <div className="max-w-6xl mx-auto text-center px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-8">

            <div className="p-12 bg-[url('/1.svg')] rounded-2xl shadow-md">
              
            </div>

            <div className="p-12 bg-[url('/2.svg')] bg-cover rounded-2xl shadow-md">
              
            </div>

            <div className="p-6 bg-[url('3.svg')] bg-cover rounded-2xl shadow-md md:row-span-3">
              
            </div>

            <div className="p-6 bg-[url('/Frame.png')] bg-cover rounded-2xl shadow-md md:row-span-3">
            </div>

            <div className="p-6 bg-[url('5.svg')] bg-cover  rounded-2xl shadow-md md:row-span-2">
              
            </div>

            <div className="p-6 bg-[url('6.svg')] bg-cover rounded-2xl shadow-md">
              
            </div>

            <div className="p-6 bg-[url('7.svg')] bg-cover rounded-2xl shadow-md">
              
            </div>


          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-200 py-8 bg-grey-800 w-full">
        <p className="text-sm">
          &copy; 2025 Breanna Fraire. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;


