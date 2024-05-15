import React, { useState, useEffect } from "react";

export const VideoComponent = () => {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handlePlay = () => {
    console.log("Play button clicked!");
  };

  if (showVideo) {
    return (
      <div className="w-200 h-200 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="spinner">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          </div>
        )}
        {!loading && (
          <div>
            <video
              className={`h-full w-full rounded-lg ${loading ? "hidden" : ""}`}
              controls
              onPlay={handlePlay}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => {
                setShowVideo(false);
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <button
        onClick={() => {
          setShowVideo(true);
        }}
      >
        See video
      </button>
    );
  }
};
