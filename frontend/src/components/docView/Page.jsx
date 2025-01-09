import React, { useState, useEffect } from 'react';
import { Header } from '@/components/docView/Header';
import { ResizableSidebar } from '@/components/docView/ResizableSidebar';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7 } from '@/components/docView/Slides';

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const slideElement = document.getElementById(`slide-${currentSlide}`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSlide]);

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <ResizableSidebar setCurrentSlide={setCurrentSlide} />
        <main className="flex-1 overflow-y-auto">
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
          <Slide5 />
          <Slide6 />
          <Slide7 />
        </main>
      </div>
    </div>
  );
}
