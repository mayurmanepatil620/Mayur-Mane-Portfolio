"use client";

import { PropsWithChildren } from "react";
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import GamePreloader from "@/components/portfolio/sections/GamePreloader";

export function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <GamePreloader>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <PortfolioHeader />
        <main>{children}</main>
        <PortfolioFooter />
      </div>
    </GamePreloader>
  );
  
}
