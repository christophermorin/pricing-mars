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
    items: ["Solar panels", "Redundant Life Support System", "High-Speed Colony Bandwidth Access", "Potatoe seeds", "Customizable Fertilization System (BYO)", "Emergency Beacon System", "Dual Emergency Escape Suits"]
  },
  {
    id: 1,
    title: "Olympus",
    price: "42",
    description: "Live your best life in these multi storied Martian villas. Don't mind the wind!",
    items: ["One kitten", "Integrated Colonial Power Grid", "Timed H20 showers", "Multi-Level Design Options", "Self repairing structure! (Untested)", "Rapid Deployment Escape Pods", "Complimentary Condiments",]
  },
  {
    id: 2,
    title: "Pavonis",
    price: "11",
    description: "These mid tier options bring relative comfort and safety, all in one!",
    items: ["Comfort-Enhancing Heated Floors", "Personal wind farm", "EM Shelters a short walk away!", "Robust and Reliable Communications", "Cutting-Edge Cryofreeze Laundry Service", "Local site seeing", "Corn",]
  }
]

export default cardData;