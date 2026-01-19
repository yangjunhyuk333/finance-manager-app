import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="mobile-container">
      <main style={{ flex: 1, padding: '20px', paddingBottom: '80px' }}>
        {children}
      </main>
      
      {/* Background decoration (optional blobs) */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 0, 128, 0.15)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
       <div style={{
        position: 'fixed',
        bottom: '10%',
        right: '-5%',
        width: '250px',
        height: '250px',
        background: 'rgba(121, 40, 202, 0.15)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default Layout;
