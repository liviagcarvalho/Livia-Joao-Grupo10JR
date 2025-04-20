import React from "react";
import styled from "styled-components";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #f6fdf4 10%,
    #9CAF88 40%,
    #9CAF88 60%,
    #f6fdf4 90%,
    #ffffff 100%
  );
`;



const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default GradientBackground;
