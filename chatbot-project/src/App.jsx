import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import "./App.css";


function App() {
  let [chatMessages, setChatMassage] = useState([]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMassage={setChatMassage} />
    </div>
  );
}

export default App;
