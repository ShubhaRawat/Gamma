import React, { useState, useEffect } from 'react';
import { Header } from '@/components/docView/Header';
import { ResizableSidebar } from '@/components/docView/ResizableSidebar';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7 } from '@/components/docView/Slides';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import CardTemplates from './slidesView/CardTemplates';
import AddButton from './slidesView/AddButton';

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(1);
  useEffect(() => {
    const slideElement = document.getElementById(`at-${currentSlide}`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSlide]);
  const [slides, setSlides] = useState([
    { id: 1, Slide: <Slide1 /> },
    { id: 2, Slide: <Slide2 /> },
    { id: 3, Slide: <Slide3 /> },
    { id: 4, Slide: <Slide4 /> },
    { id: 5, Slide: <Slide5 /> },
    { id: 6, Slide: <Slide6 /> },
    { id: 7, Slide: <Slide7 /> }
  ])
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
      <Slide1 />
    ),
    onClick: () => setCurrentSlide(1)
  },
  {
    number: 2,
    id: 2,
    title: 'Understanding Your Target Audience',
    content: (
      <Slide2/>
    ),
    onClick: () => setCurrentSlide(2)
  },
  {
    number: 3,
    id: 3,
    title: 'Identifying Customer Pain Points',
    content: (
      <Slide3/>
    ),
    onClick: () => setCurrentSlide(3)
  },
  {
    number: 4,
    id: 4,
    title: 'Developing Buyer Personas',
    content: (
      <Slide4/>
    ),
    onClick: () => setCurrentSlide(4)
  },
  {
    number: 5,
    id: 5,
    title: 'Utilizing Customer Segmentation',
    content: (
      <Slide5/>
    ),
    onClick: () => setCurrentSlide(5)
  },
  {
    number: 6,
    id: 6,
    title: 'Crafting Tailored Marketing Strategies',
    content: (
      <Slide6/>
    ),
    onClick: () => setCurrentSlide(6)
  },
  {
    number: 7,
    id: 7,
    title: 'Optimizing Channel Strategies',
    content: (
      <Slide7/>
    ),
    onClick: () => setCurrentSlide(7)
  }
]);
useEffect(() => {
  setSlides(slidesPreview.map((p) => {
    return {Slide:p.content,id:p.id}
  }))
},[slidesPreview])
return (
    <div className="h-screen flex flex-col  bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <ResizableSidebar setCurrentSlide={setCurrentSlide} setSlidesPreview={setSlidesPreview} slidesPreview={slidesPreview} />
        </DndContext>
        <main className="flex-1 overflow-y-auto">
          <div>
            {
              slides.map(({Slide,id},index) => {
                return <div key={index} className='' id={`at-${id}`}>
                  {Slide}
                  <div
        className="flex w-full justify-center items-center relative"
        style={{ position: "relative", marginTop: "20px" }}
      >
        {/* {" "} */}
        {/* <AddButton slidesPreview={slidesPreview} setSlidesPreview={setSlidesPreview} /> */}
      </div>
                 </div>
              })
            }
          </div>
        </main>
      </div>
    </div>
  );
}
