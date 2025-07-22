import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import { motion } from "motion/react";

function App() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <section className="bg-grey-200 w-full py-40 mt-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-8">

            {/* Div Block #1 - Change State*/}
            <motion.div 
              className={`cursor-pointer rounded-2xl shadow-md overflow-hidden bg-cover ${expanded ? 'md:row-span-3' : 'md:row-span-1'} ${expanded ? "bg-[url('/1.1.svg')]" : "bg-[url('/1.svg')]"}`}
              onClick={() => setExpanded(!expanded)} 
              layout
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
            </motion.div>

            
            
            {/* Div Block #2 - Static */}
            <div className="p-12 bg-[url('/2.svg')] bg-cover rounded-2xl shadow-md">
              
            </div>
            
            {/* Div Block #3 - Change State*/}
            <motion.div
              className={`cursor-pointer rounded-2xl shadow-md overflow-hidden bg-cover ${expanded2 ? 'md:row-span-3' : 'md:row-span-1'} ${expanded2 ? "bg-[url('/3.svg')]" : "bg-[url('/3.1.png')]"}`}
              onClick={() => setExpanded2(!expanded2)} 
              layout
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              
            </motion.div>

            {/* Div Block #4 - Change State */}
            <motion.div
              className={`p-6 bg-[url('/Frame.png')] bg-cover rounded-2xl shadow-md ${expanded ? 'md:row-span-1 md:col-start-1 md:row-start-4' : 'md:row-span-3'} ${expanded ? "bg-[url('/4.1.svg')]" : "bg-[url('/Frame.png')]"}`}
              onClick={() => setExpanded(!expanded)} 
              layout
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
            </motion.div>

            {/* Div Block #5 - Static */}
            <div className="p-6 bg-[url('5.svg')] bg-cover  rounded-2xl shadow-md md:row-span-2">
              
            </div>

            {/* Div Block #6 - Static */}
            <div className="p-6 bg-[url('6.svg')] bg-cover rounded-2xl shadow-md md:row-start-4 md:col-start-2">
              
            </div>

            {/* Div Block #7 - Change State */}
            <motion.div 
              className={`p-6 bg-[url('/Frame.png')] bg-cover rounded-2xl shadow-md ${expanded2 ? 'md:row-span-1 md:col-start-3 md:row-start-4' : 'md:row-span-3'} ${expanded2 ? "bg-[url('/7.svg')]" : "bg-[url('/7.1.svg')]"}`}
              onClick={() => setExpanded2(!expanded2)} 
              layout
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >     
            </motion.div>


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


