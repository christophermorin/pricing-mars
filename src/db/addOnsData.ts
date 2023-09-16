export interface addOnsType {
  heading: string;
  content: string;
  price: number | string;
}

export const addsOnsData: addOnsType[] = [
  {
    heading: "Refer a friend!",
    content:
      "Convince someone, anyone, to get on board and earn a free seed crop of choice upon arrival!",
    price: "Free!",
  },
  {
    heading: "Expansion!",
    content:
      "Feeling cramped? Stretch out into our extended sleeping pods, or install that desk treadmill you've always wanted! Take a stroll! Add a modular expansion today!",
    price: 27,
  },
  {
    heading: "Safety!",
    content:
      "Enjoy peace of mind with our money back guaranteed add-on safety features!* ",
    price: 42,
  },
];
