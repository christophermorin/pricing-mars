import { CardType } from "../../../db/cardData"

interface Props {
  data: CardType
}

export default function Card({ data }: Props) {
  return (
    // <div style={{ position: 'relative' }}>
    <div className={`card ${data.id !== 1 ? "drop-card" : ""}`}>
      <div className={`${data.id === 1 ? 'card-outline' : ''}`}></div>
      <div className="card-top">
        <h2 className="text-2">{data.title}</h2>
        <p className="mt-20">${data.price}/month</p>
        <div data-testid="card_button" className="btn-card mt-10">Breathe Valor</div>
        <p className="mt-20">{data.description}</p>
      </div>
      <section>
        <ul style={{ borderTop: "1px solid black", display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: "20px", marginTop: "20px", padding: "20px 0" }}>
          {data.items.map(item => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </section>
      {/* <div> */}
      <div className="btn-card mt-10">Breathe Valor</div>
      {/* </div> */}
    </div >
    // </div>
  )
}