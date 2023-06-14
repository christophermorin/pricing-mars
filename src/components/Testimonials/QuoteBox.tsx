export default function QuoteBox({ text }: { text: string }) {
  return (
    <div className="quote-box">
      <p className="">
        ”
        {text}
        “
      </p>
    </div>
  )
}