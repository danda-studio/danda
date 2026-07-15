import type { ServiceState } from "./types";

export const SERVICES: ServiceState[] = [
  {
    title: "Сайты и лендинги",
    heading: "Проектируем и разрабатываем сайты и лендинги",
    description: [
      { text: "Продумываем структуру, тексты и интерфейс так, ", dim: true },
      { text: "чтобы сайтом было удобно пользоваться", dim: false },
    ],
    techBadges: [
      { name: "Next.js", icon: "/landing/desktop-6/image276.png" },
      { name: "React.js", icon: "/landing/desktop-6/image277.png" },
      { name: "Nuxt.js", icon: "/landing/desktop-6/image279.png" },
      { name: "Vue.js", icon: "/landing/desktop-6/image278.png" },
    ],
  },
  {
    title: "Дизайн",
    heading: "Делаем понятный и аккуратный веб-дизайн",
    description: [
      { text: "Работаем с логикой, иерархией и визуальным порядком, ", dim: false },
      { text: "чтобы интерфейс выглядел спокойно и был удобен для пользователей", dim: true },
    ],
    techBadges: [
      { name: "Figma", icon: "/landing/desktop-6/tech-figma.png" },
      { name: "Photoshop", icon: "/landing/desktop-6/tech-photoshop.png" },
      { name: "Illustrator", icon: "/landing/desktop-6/tech-illustrator.png" },
      { name: "Krea", icon: "/landing/desktop-6/tech-krea.png" },
    ],
  },
  {
    title: "Мобильные приложения",
    heading: "Разрабатываем мобильные приложения для iOS и Android",
    description: [
      { text: "Помогаем продумать логику, экраны и сценарии использования,", dim: false },
      { text: " а затем аккуратно реализуем решение", dim: true },
    ],
    techBadges: [
      { name: "Flutter", icon: "/landing/desktop-6/tech-flutter.png" },
      { name: "React Native", icon: "/landing/desktop-6/tech-reactnative.png" },
      { name: "Swift", icon: "/landing/desktop-6/tech-swift.png" },
      { name: "Kotlin", icon: "/landing/desktop-6/tech-kotlin.png" },
    ],
  },
  {
    title: "Поддержка и развитие",
    heading: "Сопровождаем проекты после запуска",
    description: [
      { text: "Дорабатываем, улучшаем и развиваем продукт по мере роста задач и бизнеса", dim: false },
    ],
    techBadges: [],
  },
];
