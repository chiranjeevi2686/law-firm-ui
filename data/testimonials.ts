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
    content: "The corporate law team at PNC Law Associates guided us through our Series A funding with exceptional expertise. Highly recommended for any growing business.",
    rating: 5,
  },
  {
    author: "Bhavani Kurru",
    role: "Business Owner",
    content: "Outstanding service from start to finish. They handled our property purchase smoothly and professionally. Great communication throughout the process.",
    rating: 5,
  },
];
