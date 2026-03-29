import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// ເພີ່ມ CSS ພື້ນຖານໃຫ້ body ຢູ່ບ່ອນນີ້ກໍໄດ້ ເພື່ອຄວາມງ່າຍ
const bodyStyle = {
  backgroundColor: '#000000', // ພື້ນຫຼັງສີດຳ
  color: '#FFFFFF',          // ຕົວໜັງສືສີຂາວ
  fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif", // ຟອນທັນສະໄໝ
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const formContainerStyle = {
  backgroundColor: '#1E1E1E', // ສີພື້ນກ່ອງເທົາເຂັ້ມ
  padding: '40px',
  borderRadius: '16px',        // ຂອບມົນ
  maxWidth: '450px',
  width: '90%',
  boxShadow: '0 8px 30px rgba(0,0,0,0.5)', // ເງົາໃຫ້ກ່ອງລອຍຂຶ້ນມາ
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  margin: '10px 0 20px 0',
  borderRadius: '8px',
  border: '1px solid #333',     // ຂອບສີເຂັ້ມ
  backgroundColor: '#121212',  // ສີພື້ນ input
  color: '#FFF',
  fontSize: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#6D28D9', // ສີມ່ວງເປັນສີຫຼັກ
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

// ຫົວຂໍ້ Let's *talk*
const h2Style = {
  fontSize: '36px',
  fontWeight: 'bold',
  margin: '10px 0',
  color: '#FFF',
};

const talkSpanStyle = {
  color: '#A78BFA', // ສີມ່ວງອ່ອນສຳລັບ talk
  fontStyle: 'italic',
};

const labelStyle = {
  display: 'block',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '600',
  color: '#AAA', // ສີ label ອອກເທົາອ່ອນ
  textTransform: 'uppercase', // ໃຫ້ເປັນຕົວໃຫຍ່ທັງໝົດ
  letterSpacing: '1px',
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // ກະລຸນາໃສ່ ID ຂອງເຈົ້າແທນບ່ອນນີ້
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          alert("ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ! ຈະຕິດຕໍ່ກັບໄວໆນີ້.");
      }, (error) => {
          console.log(error.text);
          alert("ເກີດຂໍ້ຜິດພາດ, ລອງໃໝ່ອີກຄັ້ງ.");
      });
  };

  return (
    // ສ້າງ Div ເພື່ອຄຸມທັງໜ້າໃຫ້ເປັນສີດຳ
    <div style={bodyStyle}>
      
      <section id="contact" style={formContainerStyle}>
        
        {/* ສ່ວນ GET IN TOUCH */}
        <p style={{ fontSize: '14px', color: '#A78BFA', fontWeight: 'bold', margin: '0 0 10px 0', textTransform: 'uppercase' }}>
          GET IN TOUCH
        </p>
        
        {/* ຫົວຂໍ້ Let's talk */}
        <h2 style={h2Style}>
          Let's <span style={talkSpanStyle}>talk</span>
        </h2>
        
        {/* ຄຳອະທິບາຍ */}
        <p style={{ color: '#AAA', margin: '0 0 40px 0', fontSize: '15px' }}>
          Drop us a message and we'll get back to you.
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>NAME</label>
            <input type="text" name="user_name" style={inputStyle} placeholder="Your full name" required />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>EMAIL</label>
            <input type="email" name="user_email" style={inputStyle} placeholder="you@example.com" required />
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <label style={labelStyle}>MESSAGE</label>
            <textarea name="message" style={{ ...inputStyle, height: '120px', resize: 'vertical' }} placeholder="What's on your mind?" required />
          </div>
          
          {/* ປຸ່ມ Send Message ສີມ່ວງ */}
          <button type="submit" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor='#7C3AED'} onMouseOut={(e) => e.target.style.backgroundColor='#6D28D9'}>
            Send Message
          </button>
        </form>
        
      </section>
      
    </div>
  );
};

export default Contact;