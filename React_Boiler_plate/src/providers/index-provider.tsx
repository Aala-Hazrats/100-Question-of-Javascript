import { ThemeProvider } from "@/context/theme-provider";
import { queryClient } from "@/services/client";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const IndexProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default IndexProvider;
