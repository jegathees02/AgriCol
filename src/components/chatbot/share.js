// import React from "react";
// import * as RS from "react-share";
// import styled from "styled-components";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { IoMdCopy as CopyIcon } from "react-icons/io";

// const StyledDiv = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// const Buttons = styled.span`
//   /* display: flex;
//   justify-content: space-between; */
// `;

// const sandboxAppUrl = window.location.href;
// const sandboxId = sandboxAppUrl.split(".")[0].replace("https://", "");
// const url = `https://codesandbox.io/s/${sandboxId}`;

// const shareHeading = "My Chatbot";
// const shareText =
//   "I've made my very own chatbot in JavaScript - try talking to it here!";

// export default function Share() {
//   const buttonIconAndProps = [
//     // [RS.FacebookShareButton, RS.FacebookIcon, { quote: shareText }],
//     [RS.WhatsappShareButton, RS.WhatsappIcon, { title: shareText }],
//     // [
//     //   RS.LinkedinShareButton,
//     //   RS.LinkedinIcon,
//     //   { quote: shareHeading, summary: shareText }
//     // ],
//     [RS.TwitterShareButton, RS.TwitterIcon, { title: shareText }],
//     [
//       RS.EmailShareButton,
//       RS.EmailIcon,
//       { subject: shareHeading, body: shareText }
//     ],
//     [
//       ({ children }) => (
//         <CopyToClipboard
//           text={sandboxAppUrl}
//           onCopy={() => window.alert("Chatbot URL copied to clipboard!")}
//         >
//           {children}
//         </CopyToClipboard>
//       ),
//       CopyIcon,
//       {
//         onClick: () => {
//           Navigator.clipboard.write(url).then(res => {
//             window.alert("URL copied to clipboard!");
//           });
//         },
//         style: { display: "inline" }
//       }
//     ]
//   ];

//   return (
//     <StyledDiv>
//       <span>Share with a friend:</span>
//       <Buttons>
//         {buttonIconAndProps.map(([Button, Icon, props = {}], idx) => (
//           <Button key={idx} {...{ url: sandboxAppUrl, ...props }}>
//             <Icon size={32} />
//           </Button>
//         ))}
//       </Buttons>
//     </StyledDiv>
//   );
// }
