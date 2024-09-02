import type { Metadata } from "next";
import './globals.css';
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import {GridBackgroundDemo} from "./components/ui/grid-background";

 
export const metadata: Metadata = {
  title: 'Arjun T A Portfolio '
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body>
      <GridBackgroundDemo/>      
      <AuroraBackground>
      {children}
      </AuroraBackground>
      </body>
    </html>
  );
}
