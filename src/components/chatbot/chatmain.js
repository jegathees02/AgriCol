// import React, { useState } from "react";
// // import { Button } from "antd";
// import { Button } from "@mui/material";
// import styled from "styled-components";
// // import "antd/dist/antd.css";

// // import Conversation from "./Conversation";
// import Conversation from "./conversation";
// // import EndModal from "./EndModal";
// import EndModal from "./endmodal";
// // import Share from "./Share";
// import Share from "./share";
// // import { stepifyScript } from "./utils";
// import { stepifyScript } from "./utils";
// // import { script } from "../chatbot";
// import { script } from "./chatbot";

// const Container = styled.div`
//   padding: 20px;
//   height: 100%;
//   font-size: 1.5em;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;

//   h2 {
//     color: white;
//   }
// `;

// const Main = styled.div`
//   width: 350px;
// `;

// const steps = stepifyScript(script);

// export default function ChatbotMain() {
//   const [showModal, setShowModal] = useState(false);
//   const [conversationKey, setConversationKey] = useState(1);

//   const handleEnd = () => {
//     setTimeout(() => {
//       setShowModal(true);
//     }, 1000);
//   };

//   const handleHide = () => {
//     setShowModal(false);
//   };

//   const handleRestart = () => {
//     setConversationKey(count => count + 1);
//     handleHide();
//   };

//   return (
//     <Container>
//       <Main>
//         <Conversation {...{ steps, handleEnd, conversationKey }} />
//         <br />
//         <Button
//           block
//           onClick={() => setShowModal(true)}
//           size="large"
//           type="primary"
//         >
//           How was this built?
//         </Button>
//         <Share />
//       </Main>
//       <EndModal
//         {...{
//           handleHide,
//           handleRestart,
//           showModal
//         }}
//       />
//     </Container>
//   );
// }

// import ChatBot from "react-simple-chatbot";
// import Chatbot from 'react-chatbot-kit';
// import { ReactSimpleChatbot } from 'react-simple-chatbot';

// const steps = [
// 	{
// 		id: '0',
// 		message: 'Hey Geek!',
// 		end: true
// 	}
// ];

// function ChatbotMain() {
// 	return (
// 		<div className="App">
// 			<h1>Welcome to Geeksforgeeks</h1>
// 			<ChatBot steps={steps} />
// 		</div>
// 	);
// }

// export default ChatbotMain;


import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hey Geek!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'Read Articles' },

		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "img.png",
	floating: true,
};

function ChatbotMain() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="GeekBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default ChatbotMain;

