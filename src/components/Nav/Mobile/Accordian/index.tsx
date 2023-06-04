import { navDataType } from "../../../../db/navData"

interface Props {
  data: navDataType
}

export default function Accordian({ data }: Props) {

  //TODO: Temp css classes. Can be cleaned up
  return (
    <li className="menu-li">
      <div>
        <>
          <input id={`acc${data.id}`} type="checkbox" />
          <label htmlFor={`acc${data.id}`}>
            <h2 className="accordian-header">{data.catagory}</h2>
          </label>
          <div className="acc">
            <ul className="accordian-ul">
              {data.items.map((item) => {
                return (
                  item.map((el, i) => {
                    return <li key={i}>{el}</li>
                  })
                )
              })}
            </ul>
          </div>
        </>
      </div>
    </li>
  )
}