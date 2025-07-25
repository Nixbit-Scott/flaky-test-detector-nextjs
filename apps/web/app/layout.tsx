import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flaky Test Detector - AI-Powered Test Reliability Platform",
  description: "Eliminate flaky tests with intelligent detection and retry logic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
