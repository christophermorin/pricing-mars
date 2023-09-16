export interface faqDataType {
  id: number;
  header: string;
  content: string;
}

export const faqData: faqDataType[] = [
  {
    id: 1,
    header: "What if there's an emgergency?",
    content:
      "Safety is our utmost priority. Some of our habitats come equipped with redundant life support systems, emergency beacons, and even escape pods for swift evacuation if needed. We prioritize your well-being and have contingency plans in place to handle any of the many unforeseen circumstances that occur.",
  },
  {
    id: 2,
    header: "How's the weather?",
    content:
      "With average tempuratures ranging from -62C(-80F) to -29C(-20F), embrace the enchanting dust storms that paint the sky in hues of red, as snowflakes of carbon dioxide gently descend from the skies. Unforgettable weather awaits your extraordinary new life! ",
  },
  {
    id: 3,
    header: "Is it safe to live on Mars?",
    content: "Of course!",
  },
];
