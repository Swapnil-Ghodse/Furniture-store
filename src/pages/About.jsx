import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className=" stat-title text-primary-content text-4xl font-bold tracking-widest">
              Furniture
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        sollicitudin at tellus et vulputate. Morbi quis ullamcorper libero.
        Proin diam sem, bibendum sit amet pellentesque ac, laoreet non arcu. Sed
        id nisi placerat, porta ex eu, faucibus magna. Cras maximus odio vel
        ipsum euismod, et mollis metus fringilla. Nulla sit.
      </p>
    </>
  );
}

export default About;
