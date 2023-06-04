export interface navDataType {
  id: number,
  catagory: string,
  headers: string[],
  items: string[][],
}

export const navData: navDataType[] = [
  {
    id: 1,
    catagory: "Products",
    headers: ["Client Management", "Project Managment", "Financial Management", "Whats New"],
    items: [
      ["CRM",
        "Scheduling",
        "Proposals",
        "Contacts",
        "Forms",
      ],
      ["Time Tracking",
        "Tasks",
        "File Sharing",
        "Client portal",
        "Collaboration",
      ],
      [
        "Invoicing",
        "Payments",
        "Accouting",
        "Taxes",
        "Banking",
      ],
      [""]
    ]
  },
  {
    id: 2,
    catagory: "Services",
    headers: ["Business Services",
      "Creative and Digital",
      "Professional Services",
      "Other services"],
    items: [
      [
        "11", "22", "33"
      ],
      [
        "4", "5", "6"
      ],
      [
        "7", "8", "9"
      ],
      [""]
    ]
  }
]