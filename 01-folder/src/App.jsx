import React from 'react'
import Card from './components/Card'

import './index.css'
const App = () => {  
const serviceCards = [
  {
    heading: "Web Design",
    tagline: "Craft engaging, user-friendly websites",
    tags: ["Landing Page", "Website", "One Page"]
  },
  {
    heading: "UI/UX Design",
    tagline: "Design that boosts user satisfaction",
    tags: ["Wireframing", "Prototyping", "App Design"]
  },
  {
    heading: "E-commerce Solutions",
    tagline: "Sell smarter with seamless shopping",
    tags: ["Online Store", "Payment Gateway", "Shopify"]
  },
  {
    heading: "Brand Identity",
    tagline: "Build a memorable digital presence",
    tags: ["Logo Design", "Brand Kit", "Rebranding"]
  },
  {
    heading: "SEO Optimization",
    tagline: "Rank higher, grow faster",
    tags: ["On-page SEO", "Backlinks", "Keyword Research"]
  },
  {
    heading: "Web Development",
    tagline: "Fast, secure, scalable solutions",
    tags: ["Frontend", "Backend", "Full-stack"]
  },
  {
    heading: "Social Media Design",
    tagline: "Boost audience engagement visually",
    tags: ["Post Design", "Reels", "Ad Creatives"]
  },
  {
    heading: "Graphic Design",
    tagline: "Visuals that tell your brand story",
    tags: ["Posters", "Flyers", "Brand Collaterals"]
  },
  {
    heading: "Landing Page Specialist",
    tagline: "Convert more visitors into customers",
    tags: ["Portfolio Page", "Product Page", "Sales Funnel"]
  },
  {
    heading: "App Interface Design",
    tagline: "Smooth, intuitive mobile experiences",
    tags: ["Android UI", "iOS UI", "Responsive Layouts"]
  }
];


  return (
    
   <div className="parent">
    {serviceCards.map(function(card,idx){
      return <Card key={idx} card={card}
      />
    })}
   </div>
  )
}
 
export default App
