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
    rgba(29, 49, 31, 0) 0%,
    #1d311f 20%,
    #1d311f 80%,
    rgba(29, 49, 31, 0) 100%
  );
`;

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default GradientBackground;
