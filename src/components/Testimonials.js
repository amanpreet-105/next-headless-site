'use client';
import React from 'react'
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

function Testimonials({ testimonialsData }) {
  // Check if testimonialsData exists and has nodes
  const testimonials = testimonialsData?.nodes || [];
  const hasTestimonials = testimonials.length > 0;

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
  });

  // If no testimonials, don't render the section
  if (!hasTestimonials) return null;

  return (
    <section className="bg-[url('/images/bg-testimonial.jpg')] bg-cover bg-center section-padding">
      <div className="container">
        <div className="grid gap-5 justify-items-start text-center text-white">
          <h2 className="h2-title !mb-0 w-full">
            Testi<span>monials</span>
          </h2>
          <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto leading-8 text-lg">
            {testimonials.map((testimonial, index) => (
              <div key={'testimonial-'+index} className="keen-slider__slide text-center p-6">
                <div className="italic" dangerouslySetInnerHTML={{ __html: testimonial?.content || '' }} ></div>
                <span className="text-xl font-semibold mt-5 inline-block">
                  {testimonial?.title || ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials