export type TestimonialVariant = "light" | "dark";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  variant: TestimonialVariant;
}
