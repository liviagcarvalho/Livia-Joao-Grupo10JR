import React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div
      className="w-full relative"
      style={{
        background: `linear-gradient(to bottom, rgba(29, 49, 31, 0) 0%, #1D311F 20%, #1D311F 80%, rgba(29, 49, 31, 0) 100%)`,
      }}
    >
      {children}
    </div>
  );
};

export default GradientBackground;
