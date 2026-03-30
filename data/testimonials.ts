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
  {
    author: "Amanda Martinez",
    role: "Private Client",
    content: "The family law attorneys were compassionate, professional, and fought hard for my interests. I couldn't have asked for better representation.",
    rating: 5,
  },
  {
    author: "David Thompson",
    role: "Corporate Client",
    content: "Years of working with PNC Law Associates. Consistently excellent legal advice and quick turnaround times. They're our go-to firm for all our legal needs.",
    rating: 5,
  },
];
