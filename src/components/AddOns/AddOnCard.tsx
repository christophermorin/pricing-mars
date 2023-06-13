import { addOnsType } from "../../db/addOnsData"

export default function AddOnCard({ card }: { card: addOnsType }) {
  return (
    <div className="addOn-card" data-testid="addon-card">
      <section>
        <h3>{card.heading}</h3>
        <p className="mt-20">{card.content}</p>
      </section>
      <section>
        <p className="addOn-end">{card.price}</p>
      </section>
    </div>
  )
}
