'use client';

import { useState, useRef, useEffect } from 'react';
import { SlidePreview } from './SlidePreview';
import { MinimizeIcon as ResizeIcon } from 'lucide-react';

const MIN_WIDTH = 150;
const MAX_WIDTH = 300;
const DEFAULT_WIDTH = 200;
export function ResizableSidebar({ setCurrentSlide }) {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;

      let newWidth = e.clientX;
      if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
      if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;
      
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const slides = [
    {
      number: 1,
      title: 'Customer Targeting Strategy',
      content: (
        <div className="space-y-2">
          <h1 className="text-lg font-bold">Customer Targeting Strategy</h1>
          <p className="text-xs text-muted-foreground line-clamp-2">
            Unlocking the secret to customer success requires a comprehensive understanding...
          </p>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
            [Main Strategy Image]
          </div>
        </div>
      ),
      onClick: () => setCurrentSlide(1)
    },
    {
      number: 2,
      title: 'Understanding Your Target Audience',
      content: (
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Understanding Your Target Audience</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              [Audience Persona]
            </div>
            <ul className="text-xs text-muted-foreground list-disc list-inside">
              <li>Demographic info</li>
              <li>Psychographic data</li>
              <li>Behavioral patterns</li>
            </ul>
          </div>
        </div>
      ),
      onClick: () => setCurrentSlide(2)
    },
    {
      number: 3,
      title: 'Identifying Customer Pain Points',
      content: (
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Identifying Customer Pain Points</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-1">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                  [Pain Point {i}]
                </div>
                <p className="text-xs text-muted-foreground truncate">Pain Point {i}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      onClick: () => setCurrentSlide(3)
    },
    {
      number: 4,
      title: 'Developing Buyer Personas',
      content: (
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Developing Buyer Personas</h2>
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
            [Buyer Personas Infographic]
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">
            Buyer personas are semi-fictional representations of your ideal customers...
          </p>
        </div>
      ),
      onClick: () => setCurrentSlide(4)
    },
    {
      number: 5,
      title: 'Utilizing Customer Segmentation',
      content: (
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Utilizing Customer Segmentation</h2>
          <div className="grid grid-cols-2 gap-2">
            <ul className="text-xs text-muted-foreground list-disc list-inside">
              <li>Demographic</li>
              <li>Psychographic</li>
              <li>Behavioral</li>
              <li>Geographic</li>
            </ul>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              [Segmentation Diagram]
            </div>
          </div>
        </div>
      ),
      onClick: () => setCurrentSlide(5)
    },
    {
      number: 6,
      title: 'Crafting Tailored Marketing Strategies',
      content: (
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Crafting Tailored Marketing Strategies</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              [Strategy 1]
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              [Strategy 2]
            </div>
          </div>
          <ul className="text-xs text-muted-foreground list-disc list-inside">
            <li>Personalized content</li>
            <li>Targeted advertising</li>
            <li>Custom email sequences</li>
          </ul>
        </div>
      ),
      onClick: () => setCurrentSlide(6)
    },
    {
      number: 7,
      title: 'Optimizing Channel Strategies',
      content: (
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Optimizing Channel Strategies</h2>
          <div className="grid grid-cols-2 gap-2">
            {['Social Media', 'Email', 'Content', 'Paid Ads'].map((channel, index) => (
              <div key={index} className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-muted rounded flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground">
                  [Icon]
                </div>
                <span className="text-xs truncate">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      onClick: () => setCurrentSlide(7)
    }
  ];

  return (
    <div 
      ref={sidebarRef}
      className="relative h-[calc(100vh-48px)] border-r bg-background flex"
      style={{ width }}
    >
      <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-2">
        {slides.map((slide, index) => (
          <SlidePreview
            key={slide.number}
            isActive={index === 0}
            {...slide}
            onClick={slide.onClick}
          />
        ))}
      </div>
      
      <div
        onMouseDown={() => setIsResizing(true)}
        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize group hover:w-2 transition-all"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 -translate-x-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity bg-accent flex items-center justify-center">
          <ResizeIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
