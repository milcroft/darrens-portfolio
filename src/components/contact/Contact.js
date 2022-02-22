import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// import hooks from
import { useTheme } from '../../hooks/useTheme';

// import components
import Border from '../../components/border/Border';



// import styles from
import '../../components/contact/Contact.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const { mode } = useTheme();

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_pfwk2kr';
      const templateId = 'template_dg8ksf9';
      const userId = 'user_AklBM3rUoLbw7TSD2R6jY';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div id='contact-form' className={`contact-section ${mode}`}>
      <h2 className={`contact-form--title ${mode}`}>Drop us a line</h2>
      <Border />

      <div className={`contact-form ${mode}`}>
        <label className="contact-form--label">
          Full Name
        <input
          type='text'
          placeholder="What's your full name ?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <label className="contact-form--label">
          Email address
        <input
          type='email'
          placeholder='you@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <label className="contact-form--label">
          Message
        <textarea
          placeholder='Write your message here'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        </label>
        <button className={`form-button ${mode}`}onClick={submit}>Submit</button>
        <span className={emailSent ? 'visible' : null}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </div>
    

    </div>
    
  );
};

export default Contact;
