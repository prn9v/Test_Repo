import React from 'react';

const AdavitPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Advait's Page</h1>
      </header>
      
      <main>
        <section className="intro">
          <h2>About</h2>
          <p>This is the main content area for Advait's page.</p>
        </section>
        
        <section className="content">
          <h3>Content Section</h3>
          <p>Add your content here...</p>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2025 Advait. All rights reserved.</p>
      </footer>
      
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        header {
          text-align: center;
          margin-bottom: 40px;
          padding: 20px 0;
          border-bottom: 2px solid #eee;
        }
        
        h1 {
          color: #333;
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        
        main {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        section {
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        
        h2, h3 {
          color: #555;
          margin-bottom: 15px;
        }
        
        p {
          line-height: 1.6;
          color: #666;
        }
        
        footer {
          text-align: center;
          margin-top: 40px;
          padding: 20px 0;
          border-top: 1px solid #eee;
          color: #888;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AdavitPage;
