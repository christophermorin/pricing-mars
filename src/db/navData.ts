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
    headers: ["Habitat Management", "Supplies Managment", "Comunications", "Financial Management"],
    items: [
      ["Habitat Pods",
        "Energy Production",
        "Rover Drones",
      ],
      ["Survival Kits",
        "Food Rations",
        "Terraforming Seeds",
      ],
      [
        "Communication Devices",
        "Client portal",
        "Souvenirs",
      ],
      ["Taxes"]
    ]
  },
  {
    id: 2,
    catagory: "Services",
    headers: ["Construction",
      "Farming",
      "Health & Wellness",
      "Other services"],
    items: [
      [
        "Habitat Construction",
        "Maintenance",
        "Mission Planning",
      ],
      [
        "Environmental Consulting",
        "Agriculture",
        "Water Filtration",
      ],
      [
        "Medical Services",
        "Tourism Packages",
      ],
      ["Referals"]
    ]
  }
]