"use client";

import { AuthProvider } from "@/providers/auth-provider";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
