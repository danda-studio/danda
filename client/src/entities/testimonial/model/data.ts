import type { Testimonial } from "./types";

const REVIEW_TEXT = "Спасибо, это тестовый отзыв! Спасибо, это тестовый отзыв! Спасибо, это тестовый отзыв! Спасибо, это тестовый отзыв!";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "aleksey-1",
    name: "Алексей Д.",
    role: "Cleai",
    quote: `${REVIEW_TEXT} Спасибо вам`,
    avatar: "/landing/desktop-6/component9.jpg",
    variant: "light",
  },
  {
    id: "aleksey-2",
    name: "Алексей Д.",
    role: "Cleai",
    quote: `${REVIEW_TEXT} Спасибо вам`,
    avatar: "/landing/desktop-6/component11.jpg",
    variant: "dark",
  },
  {
    id: "anastasiya",
    name: "Анастасия Б.",
    role: "Sensor",
    quote: REVIEW_TEXT,
    avatar: "/landing/desktop-6/component7.jpg",
    variant: "dark",
  },
  {
    id: "muhhamad",
    name: "Муххамад И.",
    role: "Digitally",
    quote: `${REVIEW_TEXT} Думаю, со временем, где-нибудь да и стрельнет мое творчество и это будет вашей заслугой!`,
    avatar: "/landing/desktop-6/component8.jpg",
    variant: "dark",
  },
  {
    id: "aleksey-3",
    name: "Алексей Д.",
    role: "Cleai",
    quote: `${REVIEW_TEXT} Спасибо вам`,
    avatar: "/landing/desktop-6/component9.jpg",
    variant: "light",
  },
];
