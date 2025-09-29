import React from 'react'

const page = () => {
  return (
    <div>
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 1rem', background: '#f5f5f5', borderRadius: '12px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#222' }}>Welcome to Shayan's Hero Page</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
            Hi, I'm Shayan! Passionate about web development, JavaScript, and building awesome user experiences. Explore my projects and get in touch!
        </p>
        <a
            href="mailto:shayanqureshi2411@example.com"
            style={{
                padding: '0.75rem 2rem',
                background: '#0070f3',
                color: '#fff',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
        >
            Contact Me
        </a>
    </section>
    </div>
  )
}

export default page
