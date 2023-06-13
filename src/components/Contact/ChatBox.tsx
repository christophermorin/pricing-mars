export default function ChatBox() {
  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <div className="chatbox-inner"></div>
        <div className="chatbox-inner"></div>
        <div className="chatbox-inner inner-large"></div>
      </div>
      <div className="chatbubble-1 chatbubble-container">
        <img src="/chat-12.svg" />
        <p>Lets talk!</p>
      </div>
      <div className="chatbubble-2 chatbubble-container">
        <img src="/filler.svg" />
        <p>Lorem ipsum dolor ipsum dol sdfssfsf!</p>
      </div>
      <div className="chatbubble-3 chatbubble-container">
        <img src="/filler.svg" />
        <p>Lorem ipsum dolor?</p>
      </div>
    </div>
  )
}