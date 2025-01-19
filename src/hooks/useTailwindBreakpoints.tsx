import { useEffect, useState } from "react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/libs/keys";

export function useTailwindBreakpoint() {
  const { minWidth } = useBreakpoint(BREAKPOINTS);

  const [isSm, setIsSm] = useState(true);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const [is2Xl, setIs2Xl] = useState(false);

  useEffect(() => {
    if (minWidth === BREAKPOINTS.sm) {
      setIsSm(true);
    } else {
      setIsSm(false);
    }

    if (minWidth === BREAKPOINTS.md) {
      setIsMd(true);
    } else {
      setIsMd(false);
    }

    if (minWidth === BREAKPOINTS.lg) {
      setIsLg(true);
    } else {
      setIsLg(false);
    }

    if (minWidth === BREAKPOINTS.xl) {
      setIsXl(true);
    } else {
      setIsXl(false);
    }

    if (minWidth === BREAKPOINTS["2xl"]) {
      setIs2Xl(true);
    } else {
      setIs2Xl(false);
    }
  }, [minWidth]);

  return { isSm, isMd, isLg, isXl, is2Xl };
}
