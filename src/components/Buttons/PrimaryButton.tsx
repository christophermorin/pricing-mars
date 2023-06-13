interface Props {
  text: string
}

export default function PrimaryButton({ text }: Props) {
  return (
    <div className="nav-buttons signup">
      {text}
    </div>
  )
}