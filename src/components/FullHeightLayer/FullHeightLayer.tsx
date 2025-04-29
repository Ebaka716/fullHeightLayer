'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search, History, Settings, Send } from 'lucide-react';

interface FullHeightLayerProps {
  title?: React.ReactNode;
  headerHeight: number;
  isVisible: boolean;
  onClose: () => void;
}

const INITIAL_LAYER_WIDTH = 350; // Re-introduce initial width
const MIN_LAYER_WIDTH = 450; // Changed minimum width to 450px
// const MAX_LAYER_WIDTH = 800; // Keep fixed max width commented out

export function FullHeightLayer({
  title = 'Layer Title',
  headerHeight,
  isVisible,
  onClose,
}: FullHeightLayerProps) {
  const [isMenuViewOpen, setIsMenuViewOpen] = useState(false);
  const [layerWidth, setLayerWidth] = useState(INITIAL_LAYER_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !layerRef.current) return;
    const newWidth = window.innerWidth - e.clientX;
    const dynamicMaxWidth = window.innerWidth * 0.75;
    const clampedWidth = Math.max(MIN_LAYER_WIDTH, Math.min(newWidth, dynamicMaxWidth));
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
            onClick={() => setIsMenuViewOpen(!isMenuViewOpen)}
            aria-label={isMenuViewOpen ? "Close Layer Menu" : "Open Layer Menu"}
            className={cn(
                "bg-orange-500 text-white rounded-md hover:bg-orange-600 focus-visible:ring-orange-400",
                "h-8 w-8 p-0 flex items-center justify-center",
                isMenuViewOpen && "bg-orange-700"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
          <div className="font-semibold truncate">{title}</div>
        </div>
        <div>
          <Button
            onClick={onClose}
            aria-label="Close Layer"
            className={cn(
                "bg-red-500 text-white rounded-md hover:bg-red-600 focus-visible:ring-red-400",
                "h-8 w-8 p-0 flex items-center justify-center"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-background z-10">
        <div className="absolute inset-0 overflow-y-auto flex items-end justify-center px-6 pb-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Enter your query..."
              className="shadow-sm pr-10 h-14"
            />
            <Send
              className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>
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
                 <Search className="mr-2 h-4 w-4" />
                 New Search
               </Button>
               <Button variant="ghost" className="w-full justify-start">
                 <History className="mr-2 h-4 w-4" />
                 History
               </Button>
            </div>
            <div>
               <Button variant="ghost" className="w-full justify-start">
                 <Settings className="mr-2 h-4 w-4" />
                 Settings
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 