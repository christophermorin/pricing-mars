export default function FaqAccordian({ id }: { id: number }) {
  return (
    <li className="menu-li">
      <div>
        <input id={`faq${id}`} type="checkbox" />
        <label htmlFor={`faq${id}`}>
          <h2 style={{ paddingBottom: "10px" }}>Products</h2>
        </label>
        <div className="faq">
          {/* // TODO: move temp styles to scss files */}
          <ul style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", marginTop: "5px", height: "100%", paddingLeft: "10px" }}>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure obcaecati consequatur ducimus quod soluta cupiditate! Animi sit sunt quos facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate nisi dolore itaque, totam tenetur.</li>
          </ul>
        </div>
      </div>
    </li>
  )
}