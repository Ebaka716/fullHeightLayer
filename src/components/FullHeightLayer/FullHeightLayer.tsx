'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FullHeightLayerProps {
  title?: React.ReactNode;
  headerHeight: number;
  isVisible: boolean;
}

const INITIAL_LAYER_WIDTH = 350;
const MIN_LAYER_WIDTH = 200;
const MAX_LAYER_WIDTH = 800;

export function FullHeightLayer({
  title = 'Layer Title',
  headerHeight,
  isVisible,
}: FullHeightLayerProps) {
  const [isMenuViewOpen, setIsMenuViewOpen] = useState(false);
  const [layerWidth, setLayerWidth] = useState(INITIAL_LAYER_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !layerRef.current) return;
    const newWidth = window.innerWidth - e.clientX;
    const clampedWidth = Math.max(MIN_LAYER_WIDTH, Math.min(newWidth, MAX_LAYER_WIDTH));
    setLayerWidth(clampedWidth);
  }, [isResizing]);

  const handleMouseUp = useCallback(() => {
    if (isResizing) {
      setIsResizing(false);
    }
  }, [isResizing]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={layerRef}
      className={cn(
        "fixed right-0 bottom-0 z-50 bg-background border-l border-gray-300 flex flex-col",
        "transition-transform duration-300 ease-in-out",
        !isVisible && "translate-x-full",
        isResizing ? "cursor-ew-resize select-none" : ""
      )}
      style={{
        top: `${headerHeight}px`,
        width: `${layerWidth}px`,
        height: `calc(100vh - ${headerHeight}px)`,
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize z-50"
      ></div>

      <div className="flex items-center justify-between p-2 pl-4 border-b bg-background h-12 shrink-0 relative z-10">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuViewOpen(!isMenuViewOpen)}
            aria-label={isMenuViewOpen ? "Close Layer Menu" : "Open Layer Menu"}
            className={cn(isMenuViewOpen && "bg-accent text-accent-foreground")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
          <div className="font-semibold truncate">{title}</div>
        </div>
        <div></div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-background z-10">
        <div className="absolute inset-0 overflow-y-auto p-4">
          Layer Content Area...
        </div>

        <div
          className={cn(
            "absolute inset-0 z-10 flex flex-col bg-background",
            "transition-transform duration-300 ease-in-out",
            !isMenuViewOpen && "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-center p-2 border-b h-12 shrink-0 relative">
            <span className="font-semibold">Menu</span>
          </div>

          <div className="flex-1 flex flex-col justify-between p-4">
            <div className="space-y-2">
               <Button
                 variant="ghost"
                 className="w-full justify-start"
                 onClick={() => setIsMenuViewOpen(false)}
               >
                 New Search
               </Button>
               <Button variant="ghost" className="w-full justify-start">
                 History
               </Button>
            </div>
            <div>
               <Button variant="ghost" className="w-full justify-start">
                 Settings
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 