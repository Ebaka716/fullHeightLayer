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
      <span className="text-lg font-semibold">My App</span>
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
        className="fixed top-0 left-0 right-0 z-10 bg-purple-500 border-b h-[64px] flex items-center px-4"
        style={{ '--header-height': `${HEADER_HEIGHT}px` } as React.CSSProperties}
      >
        {headerContent}
      </header>
      <main className="flex h-full pt-[64px]">
        {/* Main Page Content Area */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
          <p>This is the primary content of the page. The FullHeightLayer sits alongside it.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>

        {/* Pass isVisible state to the layer */}
        <FullHeightLayer
          title="Details Panel"
          headerHeight={HEADER_HEIGHT}
          isVisible={isLayerVisible}
        />
      </main>
    </div>
  );
} 