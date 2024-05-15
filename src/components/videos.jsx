"use client";
import React, { useState, useEffect } from "react";
import { VideoComponent } from "./custom/video-component";

export const Videos = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-lg font-semibold">Looking for friends</h2>
      <VideoComponent />
    </div>
  );
};
