export interface addOnsType {
  heading: string,
  content: string,
  price: number | string,
}

export const addsOnsData: addOnsType[] = [
  {
    heading: "Refer a friend!",
    content: "Convince someone, anyone, to get on board and earn a free seed crop of choice upon arrival!",
    price: "Free!"
  },
  {
    heading: "Expansion!",
    content: "Feeling cramped? Stretch out in something like our extended sleeping pods, and many more! Add a modular expansion today!",
    price: 27,
  },
  {
    heading: "I don't know yet",
    content: "It's late and I need to sleep",
    price: 69,
  }

]