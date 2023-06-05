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
    description: "Consectetur Eiusmod Adipiscing",
    items: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur", "Adipiscing", "Elit", "Sed", "Eiusmod"]
  },
  {
    id: 1,
    title: "Mountain",
    price: "17",
    description: "Ut, Nostrud Exercitation",
    items: ["Ut", "Enim", "Ad", "Minim", "Veniam", "Quis", "Nostrud", "Exercitation", "Ullamco", "Laboris"]
  },
  {
    id: 2,
    title: "Boulder",
    price: "17",
    description: "Aliquip, Commodo Cupidatat",
    items: ["Aliquip", "Commodo", "Cupidatat", "Non", "Proident", "Sunt", "In", "Culpa", "Qui", "Officia"]
  }
]

export default cardData;