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
      'klS5UCnx5KMxmpdoI'
    )
    .then((result) => {
        alert("ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ!");
        form.current.reset();
    }, (error) => {
        alert("ເກີດຂໍ້ຜິດພາດ: " + error.text);
    });
  };

  const styles = {
    wrapper: { backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif", margin: 0 },
    nav: { padding: '20px', textAlign: 'center', borderBottom: '1px solid #222', position: 'sticky', top: 0, backgroundColor: '#000', zIndex: 100 },
    section: { padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' },
    hero: { textAlign: 'center', padding: '100px 20px' },
    title: { fontSize: '48px', fontWeight: '800', margin: '0' },
    purpleText: { color: '#A78BFA' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' },
    card: { backgroundColor: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #222' },
    input: { width: '100%', padding: '14px', backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '10px', color: '#fff', marginBottom: '15px' },
    button: { width: '100%', padding: '16px', backgroundColor: '#7C3AED', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }
  };

  return (
    <div style={styles.wrapper}>
      {/* 1. Header/Hero Section */}
      <header style={styles.hero}>
        <p style={{ color: '#A78BFA', fontWeight: 'bold' }}>HELLO, I AM A GRADUATE</p>
        <h1 style={styles.title}>Computer <span style={styles.purpleText}>Science</span></h1>
        <p style={{ color: '#888', fontSize: '18px' }}>Specializing in Web Development & AI Applications.</p>
      </header>
      {/* ປຸ່ມ Download CV */}
<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <a 
    href="https://drive.google.com/drive/folders/1BQCKV4L50ef6jQPE5MdwtIL1HEd2S9LW" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      padding: '12px 24px',
      backgroundColor: 'transparent',
      color: '#A78BFA',
      border: '2px solid #A78BFA',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: '0.3s',
      display: 'inline-block'
    }}
    onMouseOver={(e) => {
      e.target.style.backgroundColor = '#A78BFA';
      e.target.style.color = '#fff';
    }}
    onMouseOut={(e) => {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = '#A78BFA';
    }}
  >
    Download CV
  </a>
</div>

      
      {/* 3. Skills Section */}
      <section style={{ ...styles.section, backgroundColor: '#050505' }}>
        <h2 style={{ fontSize: '32px' }}>Technical <span style={styles.purpleText}>Skills</span></h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          {['React', 'Node.js', 'Python', 'Machine Learning', 'Tailwind CSS', 'Django'].map(skill => (
            <span key={skill} style={{ padding: '10px 20px', border: '1px solid #333', borderRadius: '50px', fontSize: '14px' }}>{skill}</span>
          ))}
        </div>
      </section>

      {/* 4. Contact Section ) */}
      <section style={styles.section}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px' }}>Let's <span style={styles.purpleText}>Work Together</span></h2>
          <form ref={form} onSubmit={sendEmail} style={{ marginTop: '40px', textAlign: 'left' }}>
            <label style={{ fontSize: '12px', color: '#666' }}>NAME</label>
            <input type="text" name="name" placeholder="Your Name" required style={styles.input} />
            
            <label style={{ fontSize: '12px', color: '#666' }}>EMAIL</label>
            <input type="email" name="email" placeholder="Email Address" required style={styles.input} />
            
            <label style={{ fontSize: '12px', color: '#666' }}>MESSAGE</label>
            <textarea name="message" placeholder="Message" required style={{ ...styles.input, height: '120px' }} />
            
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', color: '#444', fontSize: '14px' }}>
        © 2026 Built with React & Vercel
      </footer>
    </div>
  );
}

export default App;