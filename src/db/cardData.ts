export interface CardType {
  id: number,
  title: string,
  price: string,
  description: string,
  items: string[],
}

export const cardVoid: CardType = {
  id: 11,
  title: "Voidless",
  price: "Free",
  description: "No one likes void in space",
  items: [
    "We got jokes",
    "And such things",
  ]
}


const cardData: CardType[] = [
  {
    id: 0,
    title: "Pebbles",
    price: "17",
    description: "I dont know, its a bag of pebbles",
    items: [
      "gems",
      "stones",
      "bobs pebble",
      "the jewels",
      "a green one",
      "less than a rock",
      "what what",
      "three pebbles",
      "a dirty rock",
      "one worm",
    ]
  },
  {
    id: 1,
    title: "Mountain",
    price: "17",
    description: "I dont know, its a bag of pebbles",
    items: [
      "gems",
      "stones",
      "bobs pebble",
      "the jewels",
      "a green one",
      "less than a rock",
      "what what",
      "three pebbles",
      "a dirty rock",
      "one worm",
    ]
  },
  {
    id: 2,
    title: "Boulder",
    price: "17",
    description: "I dont know, its a bag of pebbles",
    items: [
      "gems",
      "stones",
      "bobs pebble",
      "the jewels",
      "a green one",
      "less than a rock",
      "what what",
      "three pebbles",
      "a dirty rock",
      "one worm",
    ]
  }
]

export default cardData;