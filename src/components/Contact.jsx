import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';
import contactImg from "../images/contact-img.svg";
import axios from "axios"

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await axios.post("http://localhost:3001/", formDetails);
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
           
              
                <img src={contactImg} alt="Contact Us"/>
              
            
          </Col>
          <Col size={12} md={6}>
            
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="text" value={formDetails.firstName} className='input p-3' placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="text" value={formDetails.lasttName} className='input p-3' placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="email" value={formDetails.email} className='input p-3' placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="tel" value={formDetails.phone} className='input p-3' placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} md={12} className="px-1 mt-1">
                      <textarea rows="6" value={formDetails.message} className='text p-3' placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button className="button2 m-auto mt-1" type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}