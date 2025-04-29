'use client';

import React, { useState } from 'react';
import { FullHeightLayer } from '@/components/FullHeightLayer/FullHeightLayer';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Header height still needed for FullHeightLayer
const HEADER_HEIGHT = 64;

export default function ExamplePage() {
  // State for layer visibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);

  // Function to toggle visibility
  const toggleLayerVisibility = () => {
    setIsLayerVisible(!isLayerVisible);
  };

  // Updated header content with toggle button
  const headerContent = (
    <div className="flex items-center justify-between w-full">
      <span className="text-lg font-semibold">embedded UI</span>
      {/* Add Collapse/Uncollapse Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleLayerVisibility}
        aria-label={isLayerVisible ? "Collapse Layer" : "Expand Layer"}
        className={cn(isLayerVisible && "bg-accent text-accent-foreground")}
      >
        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6668 1.6665H2.3335C1.98005 1.6665 1.66683 1.97972 1.66683 2.33317V15.6665C1.66683 16.0199 1.98005 16.3332 2.3335 16.3332H15.6668C16.0203 16.3332 16.3335 16.0199 16.3335 15.6665V2.33317C16.3335 1.97972 16.0203 1.6665 15.6668 1.6665Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 1.6665V16.3332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className="fixed top-0 left-0 right-0 z-10 bg-blue-200 border-b h-[64px] flex items-center px-4"
        style={{ '--header-height': `${HEADER_HEIGHT}px` } as React.CSSProperties}
      >
        {headerContent}
      </header>
      <main className="flex h-full pt-[64px]">
        {/* Main Page Content Area - Replaced with Table */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-4">Parent Page Content</h2>
          <table className="w-full border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2 text-left font-semibold">Topic</th>
                <th className="border border-slate-300 p-2 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2 align-top font-semibold">AI - Page interaction binding</td>
                <td className="border border-slate-300 p-2 align-top">There is no expectation that iterations within the AI container will be reflected on the parent page. The parent page is unaware of the AI container&apos;s existence.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2 align-top font-semibold">Design system</td>
                <td className="border border-slate-300 p-2 align-top">Owns design of the AI container wrapper, elevation, and the parent page.</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-gray-500 mt-4 italic">A list of topics.</p> 
        </div>

        {/* Pass isVisible state and onClose handler to the layer */}
        <FullHeightLayer
          title="Embedded Panel"
          headerHeight={HEADER_HEIGHT}
          isVisible={isLayerVisible}
          onClose={toggleLayerVisibility}
        />
      </main>
    </div>
  );
} 