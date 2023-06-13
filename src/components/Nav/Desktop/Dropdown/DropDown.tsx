import { navDataType } from "../../../../db/navData"


interface Props {
  handleActive: (index: number | null) => void
  data: navDataType
}

export default function DropDown({ handleActive, data }: Props) {
  return (
    <div key={data.id} onMouseLeave={() => handleActive(null)} className="container-large dropdown-container">
      <div className="dropdown-inner-container">
        {data.headers.map((header, i) => {
          return (
            <div>
              <p className="dropdown-headers">{header}</p>
              <ul className="dropdown-ul">
                {data.items[i].map((item, j) => {
                  return (
                    <li key={j}>{item}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}