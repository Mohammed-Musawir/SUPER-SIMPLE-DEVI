import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMassage }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function SendMessages() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMassage(newChatMessages);

    const responce = Chatbot.getResponse(inputText);
    setChatMassage([
      ...newChatMessages,
      {
        message: responce,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder=" Send a message to a chatbot"
        size="22"
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={SendMessages} className="send-button">
        Send
      </button>
    </div>
  );
}
