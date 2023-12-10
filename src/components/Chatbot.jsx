import React, { useState, useEffect, useRef } from "react";
const Chatbot = () => {
	const [newMessage, setNewMessage] = useState("");
	const [showTyping, setShowTyping] = useState(false);
	const [waitingOnResponse, setWaitingOnResponse] = useState(false);
	const [messages, setMessages] = useState([]);
	const messageContainer = useRef(null);

	const mockOpeningMessage =
		"Hello there. I am Arni. Ask me anything you want related to business setup in Saudi Arabia and UAE.";
	const mockResponsePrefix = "Your Inquiry has been received will tell you once we are done with it.";

	const sendMessage = () => {
		if (waitingOnResponse) return;
		setShowTyping(true);
		setWaitingOnResponse(true);
		setMessages((prevMessages) => [...prevMessages, { role: "user", body: newMessage }]);
		setNewMessage("");
	};

	useEffect(() => {
		setShowTyping(true);
		setTimeout(() => {
			setShowTyping(false);
			setMessages((prevMessages) => [{ role: "assistant", body: mockOpeningMessage }]);
		}, 1000);
	}, []);

	useEffect(() => {
		// Scroll to the bottom when a new message is received
		messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
	}, [messages]);

	useEffect(() => {
		if (!waitingOnResponse) return;
		setTimeout(() => {
			setWaitingOnResponse(false);
			setShowTyping(false);
			setMessages((prevMessages) => [...prevMessages, { role: "assistant", body: mockResponsePrefix }]);
		}, 2000);
	}, [waitingOnResponse]);

	return (
		<div className="w-screen mx-auto h-screen bg-gray-50 flex flex-col fixed">
			<div className="bg-gray-800 flex justify-center p-4">
				<span className="text-white text-bold">Arnifi</span>
			</div>

			<div className="w-full max-w-screen-lg flex-1 m-auto p-8 my-4 pb-20 overflow-scroll" ref={messageContainer}>
				<div className="flex flex-col mb-10">
					{messages.map((message, index) => (
						<div
							key={index}
							className={`message rounded-lg py-2 px-6 mb-4 ${
								message.role === "assistant"
									? "assistant bg-blue-100 border-blue-100 self-start"
									: "user bg-green-200 border-green-200 self-end"
							}`}>
							<span>{message.body}</span>
							{message.beingTyped && (
								<span className="w-2.5 bg-gray-600 h-4 inline-block -mb-0.5 align-baseline blink"></span>
							)}
						</div>
					))}

					{showTyping && (
						<div className="message assistant rounded-lg py-2.5 px-6 mb-4 bg-blue-100 border-blue-100 self-start">
							<div className="type-indicator">
								<span>.</span>
								<span>.</span>
								<span>.</span>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="bg-gray-200 w-screen fixed inset-x-0 bottom-0">
				<div className="px-6 max-w-screen-lg lg:mx-auto bg-gray-200">
					<form
						className="max-w-screen-lg m-auto w-full p-4 flex space-x-4 justify-center items-center"
						onSubmit={(e) => {
							e.preventDefault();
							sendMessage();
						}}>
						<input
							id="message"
							type="text"
							autoComplete="off"
							className="border rounded-md p-2 flex-1 border-gray-300"
							value={newMessage}
							onChange={(e) => setNewMessage(e.target.value)}
							placeholder="Your message..."
						/>
						<button
							type="submit"
							className={`bg-gray-800 text-white px-4 py-2 rounded-md ${waitingOnResponse ? "opacity-50" : ""}`}>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chatbot;
