"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello there! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput(""); // Clear input after sending
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <div className="w-14 cursor-pointer" onClick={toggleChat}>
          <Image
            src="/images/icons/icon-chat-bot.png"
            alt="Chat Icon"
            width={200}
            height={200}
            quality={100}
            className="object-contain w-full"
          />
        </div>
      )}

      {isOpen && (
        <section className="relative bg-gradient-to-tr from-[#0B0B0B] to-[#1D2333] border border-white/5 rounded-2xl overflow-hidden min-w-[300px] h-[450px] min-h-[450px]">
          <div
            className="absolute top-2 right-2 text-2xl text-[#788199] cursor-pointer"
            onClick={toggleChat}
          >
            <IoClose />
          </div>

          <section className="flex items-center gap-4 bg-[#1D2333] p-4">
            <div className="w-12">
              <Image
                src="/images/icons/icon-chat-bot-1.png"
                alt="Chat Bot"
                width={200}
                height={200}
                quality={100}
                className="object-contain w-full"
              />
            </div>
            <div>
              <h2 className="font-medium text-sm">Chat Bot</h2>
              <p className="text-[10px] text-[#788199]">
                <span className="text-[#77DF2C]">&bull;</span> Online
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-between gap-2 w-full h-full px-2 py-4 overflow-auto">
            <div className="flex flex-col gap-2 w-full text-[10px] overflow-y-auto max-h-[350px]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } items-center gap-2`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8">
                      <Image
                        src="/images/icons/icon-chat-bot-1.png"
                        alt="Bot"
                        width={200}
                        height={200}
                        quality={100}
                        className="object-contain w-full"
                      />
                    </div>
                  )}
                  <div
                    className={`px-3 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-[#242d44] text-white"
                        : "bg-[#1D2333] text-white"
                    } ${
                      msg.sender === "bot"
                        ? "rounded-tl-none"
                        : "rounded-tr-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-2 flex flex-col gap-1 w-full h-auto">
              <form
                className="flex justify-between items-center text-[10px] bg-[#131313] px-2 rounded overflow-hidden"
                onSubmit={sendMessage}
              >
                <input
                  type="text"
                  placeholder="Send a message"
                  className="w-full bg-transparent py-2.5 outline-none text-white"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="w-4" type="submit">
                  <Image
                    src="/images/icons/icon-send.png"
                    alt="Send"
                    width={200}
                    height={200}
                    quality={100}
                    className="object-contain w-full"
                  />
                </button>
              </form>
              <div className="text-end">
                <p className="text-[8px] text-[#788199]">Powered by AdTask</p>
              </div>
            </div>
          </section>
        </section>
      )}
    </div>
  );
};

export default ChatBot;
