import React from 'react';
import CardTemplates from './slidesView/CardTemplates';
export function Slide1() {
  return (
    <div  className="flex justify-center ">
        {<CardTemplates />}
    </div>
  )
}

export function Slide2() {
  return (
    <div  className="flex justify-center ">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">Understanding Your Target Audience</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            [Audience Persona Image]
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">Understanding your target audience is crucial for effective marketing and product development.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Demographic information</li>
              <li>Psychographic data</li>
              <li>Behavioral patterns</li>
              <li>Needs and pain points</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide3() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">Identifying Customer Pain Points</h2>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                [Pain Point {i} Image]
              </div>
              <h3 className="text-xl font-semibold">Pain Point {i}</h3>
              <p className="text-muted-foreground">Description of a specific customer pain point and how your product or service addresses it.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Slide4() {
  return (
    <div  className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">Developing Buyer Personas</h2>
        <div className="aspect-square bg-muted rounded-lg mb-8 flex items-center justify-center text-muted-foreground">
          [Buyer Personas Infographic]
        </div>
        <p className="text-lg text-muted-foreground">
          Buyer personas are semi-fictional representations of your ideal customers based on market 
          research and real data about your existing customers.
        </p>
      </div>
    </div>
  );
}

export function Slide5() {
  return (
    <div  className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">Utilizing Customer Segmentation</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Customer segmentation involves dividing your customer base into groups of individuals 
              that are similar in specific ways, such as age, gender, interests, and spending habits.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Demographic segmentation</li>
              <li>Psychographic segmentation</li>
              <li>Behavioral segmentation</li>
              <li>Geographic segmentation</li>
            </ul>
          </div>
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            [Segmentation Diagram]
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide6() {
  return (
    <div  className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">Crafting Tailored Marketing Strategies</h2>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            [Strategy 1 Image]
          </div>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            [Strategy 2 Image]
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Tailored marketing strategies are designed to resonate with specific segments of your audience, 
            increasing the effectiveness of your marketing efforts.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Personalized content marketing</li>
            <li>Targeted advertising campaigns</li>
            <li>Custom email marketing sequences</li>
            <li>Product recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Slide7() {
  return (
    <div  className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">Optimizing Channel Strategies</h2>
        <div className="space-y-6">
          {['Social Media', 'Email Marketing', 'Content Marketing', 'Paid Advertising'].map((channel, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center text-muted-foreground">
                [Icon]
              </div>
              <div>
                <h3 className="text-xl font-semibold">{channel}</h3>
                <p className="text-muted-foreground">Brief description of the channel strategy and its benefits.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
