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
        <p className="mt-20">${data.price}/month</p>
        <button data-testid="card_button_top" className="btn-card mt-10">Breathe Valor</button>
        <p className="mt-20">{data.description}</p>
      </div>
      <section>
        <ul className="card-ul">
          {data.items.map(item => {
            return (
              <li key={item} className="card-features"><img src="checkmark.svg" />{item}</li>
            )
          })}
        </ul>
      </section>
      <button data-testid="card_button_bottom" className="btn-card mt-10">Breathe Valor</button>
    </div >
  )
}