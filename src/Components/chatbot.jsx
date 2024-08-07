// // src/Components/Chatbot.js
// import React, { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
    
//     // Set the chatbot ID after the script is loaded
//     script.onload = () => {
//       window.__be = window.__be || {};
//       window.__be.id = '66b36385b14a770007cdc1af';
//     };

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <noscript>
//       You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
//     </noscript>
//   );
// };

// export default Chatbot;
