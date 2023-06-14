import { CardType } from "../../db/cardData"

interface Props {
  data: CardType
}

export default function Card({ data }: Props) {
  return (
    <div className={`card ${data.id !== 1 ? "drop-card" : ""}`}>
      <div className={`${data.id === 1 ? 'card-outline' : ''}`}></div>
      <div className="card-top">
        <h2 className="text-2">{data.title}</h2>
        <div className="card-price mt-20">

          <p className="text-3">${data.price}</p>
          <p className="">/month</p>
        </div>
        <button data-testid="card_button_top" className="btn-card mt-10">Join Us!</button>
        <p className="mt-20" style={{ textAlign: "center" }}>{data.description}</p>
      </div>
      <section>
        <ul className="card-ul">
          {data.items.map(item => {
            return (
              <li key={item} className="card-features"><img src="checkmark.svg" />{item}</li>
            )
          })}
          <li>
            <button data-testid="card_button_bottom" className="btn-card mt-10">Join Us!</button>
          </li>
        </ul>
      </section>
    </div >
  )
}