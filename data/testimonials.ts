export interface Testimonial {
  author: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    author: "Chiranjeevi Netyam",
    role: "CEO, Tech Startup",
    content: "The team at PNC Law Associates provided clear, practical legal guidance and responsive support throughout our matter. Highly recommended.",
    rating: 5,
  },
  {
    author: "Bhavani Kurru",
    role: "Client",
    content: "Outstanding service from start to finish. They handled our matter smoothly and professionally with great communication throughout.",
    rating: 5,
  },
];
