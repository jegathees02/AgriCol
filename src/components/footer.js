// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter className='text-center' color='white' bgColor='dark'>
//       <MDBContainer className='p-4'>
//         <section className='mb-4'>
//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='facebook-f' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='twitter' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='google' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='instagram' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='linkedin-in' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='github' />
//           </MDBBtn>
//         </section>

//         <section className=''>
//           <form action=''>
//             <MDBRow className='d-flex justify-content-center'>
//               <MDBCol size="auto">
//                 <p className='pt-2'>
//                   <strong>Sign up for our newsletter</strong>
//                 </p>
//               </MDBCol>

//               <MDBCol md='5' start>
//                 <MDBInput contrast type='email' label='Email address' className='mb-4' />
//               </MDBCol>

//               <MDBCol size="auto">
//                 <MDBBtn outline color='light' type='submit' className='mb-4'>
//                   Subscribe
//                 </MDBBtn>
//               </MDBCol>
//             </MDBRow>
//           </form>
//         </section>

//         <section className='mb-4'>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
//             voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
//             sequi voluptate quas.
//           </p>
//         </section>

//         <section className=''>
//           <MDBRow>
//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//               <h5 className='text-uppercase'>Links</h5>

//               <ul className='list-unstyled mb-0'>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 3
//                   </a>
//                 </li>
//                 <li>
//                   <a href='#!' className='text-white'>
//                     Link 4
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-white' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
        <MDBIcon fab icon='pinterest' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#4c75a3' }} href='#'>
        <MDBIcon fab icon='vk' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ffac44' }} href='#'>
        <MDBIcon fab icon='stack-overflow' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
        <MDBIcon fab icon='youtube' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#481449' }} href='#'>
        <MDBIcon fab icon='slack-hash' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ec4a89' }} href='#'>
        <MDBIcon fab icon='dribbble' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ff4500' }} href='#'>
        <MDBIcon fab icon='reddit-alien' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
        <MDBIcon fab icon='whatsapp' />
      </MDBBtn>
    </>
  );
}