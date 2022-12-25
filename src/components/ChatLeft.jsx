import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
const ChatLeft = (props) => {
  const { leftMassageRef,handleInputMassage, massage } = props;
  console.log(massage);
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="10">
          <MDBCard id="chat2" style={{ borderRadius: "15px" }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat</h5>
              <MDBBtn color="primary" size="sm" rippleColor="dark">
                Let's Chat App
              </MDBBtn>
            </MDBCardHeader>

            <MDBCardBody>
              <div className="d-flex flex-row justify-content-start">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
                <div>
                  {massage?.map(m => (
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      {m.massageright}
                    </p>
                  ))}
                  <p className="small ms-3 mb-3 rounded-3 text-muted">
                    23:58
                  </p>
                </div>
              </div>



              <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                <div>
                  {massage.map(m=>(
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    {m.massageleft}
                  </p>
                  ))}
                  

                  <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                    00:06
                  </p>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
              </div>

            </MDBCardBody>






            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 3"
                style={{ width: "45px", height: "100%" }}
              />
              <input
                ref={leftMassageRef}
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              ></input>
              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <a className="ms-3 text-muted" href="#!">
                <MDBIcon fas icon="smile" />
              </a>

              <a type='submit'
                onClick={(e) => handleInputMassage(e)}
                className="ms-3"
                href="#!">
                <MDBIcon fas icon="paper-plane" />
              </a>

            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ChatLeft