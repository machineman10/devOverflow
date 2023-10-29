"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

const NextThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
