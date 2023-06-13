import AddOnCard from "./AddOnCard"
import { addsOnsData } from "../../db/addOnsData"

export default function AddOns() {
  return (
    <section className='container-medium'>
      <h2 className='text-2 addOn-header'>Embrace your new home and live life to the fullest with these extras!</h2>
      <section className='addOn-cards-container'>
        {/* TODO:Add to db and map to populate cards instead */}
        {addsOnsData.map(card => {
          return (
            <AddOnCard key={card.heading} card={card} />
          )
        })}
        {/* <AddOnCard />
        <AddOnCard />
        <AddOnCard /> */}
      </section>
    </section>
  )
}