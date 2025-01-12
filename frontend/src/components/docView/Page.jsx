import React, { useState, useEffect } from 'react';
import { Header } from '@/components/docView/Header';
import { ResizableSidebar } from '@/components/docView/ResizableSidebar';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7 } from '@/components/docView/Slides';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(1);
  useEffect(() => {
    const slideElement = document.getElementById(`slide-${currentSlide}`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSlide]);
  const handleDragEnd = (e) => {
    const {active,over} = e
    if (active.id === over.id) return
    setSlidesPreview((prev) => {
      const originalPos = slidesPreview.findIndex(item => item.id === active.id)
      const currentPos = slidesPreview.findIndex(item => item.id === over.id)
      const changed = arrayMove(slidesPreview, originalPos, currentPos)
      
      return changed.map((item,index) => {
        return {...item,number:index+1}
      })
    })
  }
  const [slidesPreview, setSlidesPreview
  ] = useState([{
    number: 1,
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
  ]);
  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <ResizableSidebar setCurrentSlide={setCurrentSlide} setSlidesPreview={setSlidesPreview} slidesPreview={slidesPreview} />
        </DndContext>
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
