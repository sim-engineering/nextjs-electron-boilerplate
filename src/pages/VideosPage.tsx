"use client";
import React, { useEffect, useState, useContext } from "react";
import { Videos } from "../components/videos";
import Navigation from "../components/navigation";
import "../app/globals.css";
import { Mitr } from "next/font/google";

const inter = Mitr({ weight: "400", subsets: ["latin"] });

const VideosPage = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-12 py-6 ${inter.className}`}
    >
      <div className="flex flex-col min-s-screen">
        <Navigation />
        <div className="flex flex-row">
          <Videos />
        </div>
        <div className="flex flex-row">
          <Videos />
        </div>
        <div className="flex flex-row">
          <Videos />
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full px-4 py-4 text-center text-white text-xl">
        &copy; 2024 Qatar Museum
      </footer>
    </main>
  );
};

export default VideosPage;
