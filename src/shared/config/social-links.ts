import process from "node:process";

export const SOCIAL_LINKS = {
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL ?? "#",
  telegram: process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM_URL ?? "#",
  linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL ?? "#",
};

// Where the "Написать" CTA sends people — a direct Telegram chat, not the social-profile link above.
export const TELEGRAM_CONTACT_URL = process.env.NEXT_PUBLIC_TELEGRAM_CONTACT_URL ?? "";
