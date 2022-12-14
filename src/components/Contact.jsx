import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';
import contactImg from "../images/contact-img.svg";
import axios from "axios"
import { useSelector } from 'react-redux';

export const Contact = () => {

  const language = useSelector(state => state.language);

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    mail: '',
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

  const validate = (formDetails) => {
    let errors = {};

    if (!formDetails.firstName) {language ? errors.name = 'Un nombre es obligatorio' : errors.name = 'First name is required' ;}

    if (formDetails.mail.length) {
      if (!/\S+@\S+\.\S+/.test(formDetails.mail)) {language ? errors.mail = 'E-mail incorrecto' : errors.mail = 'Wrong E-mail'};
    }
    else {language ? errors.mail = 'E-mail requerido' : errors.mail = 'E-mail is required'};

    if (!formDetails.message.length) {language ? errors.message = 'Escribe un mensaje' : errors.message = 'A message is required'};

    if (formDetails.phone.length) {
      if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(formDetails.phone)) {language ? errors.phone = 'Revisar formato del numero telefónico' : errors.phone = 'Check your phone number'};
    }

    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate(formDetails)
    if (Object.values(errors).length) {
      return alert(Object.values(errors).join('\n'));
  }
    setButtonText("Sending...");
    let response = await axios.post("http://localhost:3001/message", formDetails);
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    if (response.status == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="message">
      <Container className="contactContainer">
        <Row className="align-items-center">
          <Col size={12} md={6}>
           
              
                <div className="divImg"><img className="img" src={contactImg} alt="Contact Us"/></div>
              
            
          </Col>
          <Col size={12} md={6}>
            
                <h2>{language ? 'Contactá conmigo' : 'Contact Me'}</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="text" value={formDetails.firstName} className='input p-3' placeholder={language ? 'Nombre' : "First Name"} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="text" value={formDetails.lastName} className='input p-3' placeholder={language ? 'Apellido' : "Last Name"} onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="mail" value={formDetails.mail} className='input p-3' placeholder="E-mail" onChange={(e) => onFormUpdate('mail', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1 mt-1">
                      <input type="tel" value={formDetails.phone} className='input p-3' placeholder={language ? 'Nro telefónico' : "Phone No."} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} md={12} className="px-1 mt-1">
                      <textarea rows="6" value={formDetails.message} className='text p-3' placeholder={language ? 'Mensaje' : "Message"} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
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