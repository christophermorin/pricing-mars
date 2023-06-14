export interface contactDataType {
  id: number
  header: string,
  content: string,
  type: string,
}

export const contactData: contactDataType[] = [
  {
    id: 1,
    header: "Need help? Help is a flare away!",
    content: "Our safety department rates themselves the best around. On call and ready to help. Don't panic!",
    type: "contact"
  },
  {
    id: 2,
    header: "Easy, one step enrollment",
    content: "Would you like to know more? Don't hesitate, get in touch today!",
    type: "button"
  }
  ,
]


