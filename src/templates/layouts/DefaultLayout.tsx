import React, { ReactNode } from "react";

import { cn } from "@/libs/utils";

interface DefaultLayoutProps {
  children?: ReactNode;
  url?: string;
  className?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children = "",
  url = "",
  className = "",
}) => {
  return (
    <>
      <section className={cn("min-h-screen", className)}>{children}</section>
    </>
  );
};

export default DefaultLayout;
