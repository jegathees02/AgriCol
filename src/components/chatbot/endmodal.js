// import React from "react";
// import { Modal, Button, Dropdown, Menu } from "antd";
// import styled from "styled-components";
// import { DownOutlined } from "@ant-design/icons";

// const URL_REDIRECT = "https://chatbot.collective.tech";

// const ModalBody = styled.div`
//   h2 {
//     font-size: 3rem;
//     margin: 0px;
//   }

//   p {
//     font-size: 1.2rem;
//     margin: 0px;
//   }

//   p + p {
//     margin-top: 1rem;
//   }
// `;

// export default function EndModal({ handleHide, showModal, handleRestart }) {
//   return (
//     <Modal
//       onCancel={handleHide}
//       visible={showModal}
//       centered
//       style={{ fontSize: "larger" }}
//       footer={
//         showModal && [
//           <Dropdown
//             key="Dropdown"
//             overlay={
//               <CloseModal
//                 {...{ handleHide, handleRestart }}
//                 trigger={["click", "hover"]}
//               />
//             }
//           >
//             <Button size="large">
//               Back to conversation <DownOutlined />
//             </Button>
//           </Dropdown>,
//           <span key="Gap"> </span>,
//           <Button
//             key="Learn"
//             href={URL_REDIRECT}
//             size="large"
//             target="_blank"
//             type="primary"
//           >
//             Build your own chatbot
//           </Button>
//         ]
//       }
//     >
//       <ModalBody>
//         <h2>🤔 + 💻 = 🤖</h2>
//         <br />
//         <p>
//           💬 You've been talking to a chatbot <b>written in JavaScript</b> code.
//         </p>
//         <p>
//           💡 It takes <b>less than an hour to learn</b> how - just follow this{" "}
//           <a href={URL_REDIRECT} target="_blank" rel="noopener noreferrer">
//             tutorial
//           </a>
//           .
//         </p>
//         <p>
//           🥳 Best of all - <b>it's beginner-friendly</b>.
//         </p>
//       </ModalBody>
//     </Modal>
//   );
// }

// function CloseModal({ handleHide, handleRestart }) {
//   return (
//     <Menu>
//       <Menu.Item key="Close" onClick={handleHide}>
//         Resume
//       </Menu.Item>
//       <Menu.Item key="Restart" onClick={handleRestart}>
//         Restart
//       </Menu.Item>
//     </Menu>
//   );
// }
