// export const stepifyScript = script => {
//     return script.map(step => {
//       if (step.options) {
//         return {
//           ...step,
//           options: step.options.map((option, idx) => ({
//             ...option,
//             value: idx
//           }))
//         };
//       } else {
//         return step.trigger
//           ? step
//           : script.length > 6
//           ? { ...step, end: true }
//           : step;
//       }
//     });
//   };
  