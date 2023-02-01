import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

         <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}

      <section className='sec'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="1" lg="1" xl="2" className='mx-auto mb-4'>
              <h5 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                COMPANY
              </h5>
              <p>
                Agricol is a AI Based guiding application that provides a complete crop plan to farmer,simply
                the best friend for farmers. 
              </p>
            </MDBCol>

              {/* <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6> */}
              {/* <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6> */}
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h5 className='text-uppercase fw-bold mb-4'>Services</h5>
              <p>
                <a href='#!' className='text-reset'>
                  Equipments
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Fertilizers
                </a>
              </p>
               <p>
                <a href='#!' className='text-reset'>
                  Pesticides
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h5 className='text-uppercase fw-bold mb-4'>connections</h5>
              <p>
                <a href='#!' className='text-reset'>
                  facebook
                </a>
              </p>

              <p>
                <a href='#!' className='text-reset'>
                  youtube
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  instagram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h5 className='text-uppercase fw-bold mb-4'>Contact</h5>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Coimbatore ,
                9345335722              </p>
              {/* <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          agricol.com
        </a>
      </div>
    </MDBFooter>
  );
}