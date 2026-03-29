import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cswb4ve',   
      'template_tjlv0v4',  
      form.current,
      'klS5UCnx5KMxmpdoi'   
    )
    .then((result) => {
        console.log(result.text);
        alert("ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ! ຂ້ອຍຈະຕິດຕໍ່ກັບໄວໆນີ້.");
        form.current.reset(); 
    }, (error) => {
        console.log(error.text);
        alert("ເກີດຂໍ້ຜິດພາດ: " + error.text);
    });
  };


  const styles = {
    wrapper: {
      backgroundColor: '#000000',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Inter', sans-serif",
      color: '#ffffff',
      margin: 0
    },
    container: {
      backgroundColor: '#111111',
      padding: '50px 40px',
      borderRadius: '20px',
      width: '100%',
      maxWidth: '450px',
      textAlign: 'center',
      boxShadow: '0 10px 50px rgba(0,0,0,0.7)',
      border: '1px solid #222'
    },
    subtitle: {
      color: '#A78BFA',
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '2px',
      marginBottom: '10px'
    },
    title: {
      fontSize: '42px',
      margin: '0 0 10px 0',
      fontWeight: '800'
    },
    italicText: {
      color: '#A78BFA',
      fontStyle: 'italic'
    },
    desc: {
      color: '#888',
      marginBottom: '40px',
      fontSize: '16px'
    },
    inputGroup: {
      textAlign: 'left',
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '12px',
      fontWeight: '600',
      color: '#666',
      marginBottom: '8px',
      letterSpacing: '1px'
    },
    input: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#0a0a0a',
      border: '1px solid #333',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '16px',
      outline: 'none',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '16px',
      backgroundColor: '#7C3AED',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '700',
      cursor: 'pointer',
      marginTop: '10px',
      transition: '0.3s'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <p style={styles.subtitle}>GET IN TOUCH</p>
        <h1 style={styles.title}>Let's <span style={styles.italicText}>talk</span></h1>
        <p style={styles.desc}>Drop us a message and we'll get back to you.</p>

        <form ref={form} onSubmit={sendEmail}>
          <div style={styles.inputGroup}>
            <label>NAME</label>
            <input type="text" name="from_name" placeholder="Your full name" required style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label>EMAIL</label>
            <input type="email" name="email" placeholder="you@example.com" required style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label>MESSAGE</label>
            <textarea name="message" placeholder="What's on your mind?" required 
              style={{...styles.input, height: '120px', resize: 'none'}} />
          </div>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;