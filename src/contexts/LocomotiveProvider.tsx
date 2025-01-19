"use client";

import { ReactNode } from "react";
import { useEffect } from "react";

interface LocomotiveProviderProps {
  children?: ReactNode;
}

const LocomotiveProvider: React.FC<LocomotiveProviderProps> = ({ children }) => {
  useEffect(() => {
    const init = async () => {
      await import("locomotive-scroll").then(
        ({ default: LocomotiveScroll }) => new LocomotiveScroll(),
      );
    };
    init();
  }, []);
  return <div>{children}</div>;
};

export default LocomotiveProvider;
