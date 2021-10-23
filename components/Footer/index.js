import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-indigo-500 text-white fixed bottom-0 z-0 overscroll-none">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4">
            <p className="text-center tracking-wider">
              Tiedup Blogs &copy; 2021. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
