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
    title: "Arsia",
    price: "7",
    description: "Enjoy the simple life with these compact and easy to maintain habitats. Less can go wrong!",
    items: ["Solar panels", "Redundant air supply", "Access to colony bandwidth", "Potatoe seeds", "BYO Fertilizer", "Emergency Beacon", "Two emergency escape suits!", "Free bi-monthly scheduled maintenence!"]
  },
  {
    id: 1,
    title: "Olympus",
    price: "42",
    description: "Live your best life in these multi storied Martian villas. Don't mind the wind!",
    items: ["One kitten", "Colonial power grid", "Timed H20 showers", "Up to three levels!", "Self repairing structure! (Untested)", "Quick launch escape pods!", "Condiments", "On call maintenence!"]
  },
  {
    id: 2,
    title: "Pavonis",
    price: "11",
    description: "These mid tier options bring relative comfort and safety, all in one!",
    items: ["Heated floors", "Personal wind farm", "EM Shelters a short walk away!", "Reliable communications!", "Cryofreeze laundry!", "Local site seeing", "Corn", "Exciting!"]
  }
]

export default cardData;