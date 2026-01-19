import React, { useState, useRef } from 'react';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';

const FileUpload = ({ onFileSelect, isLoading }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateAndProcess(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      validateAndProcess(files[0]);
    }
  };

  const validateAndProcess = (file) => {
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }
    onFileSelect(file);
  };

  return (
    <div 
      className={`glass-panel ${isDragging ? 'dragging' : ''}`}
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderStyle: 'dashed',
        borderWidth: '2px',
        borderColor: isDragging ? 'var(--accent-color)' : 'var(--glass-border)',
        transition: 'all 0.3s ease',
        cursor: isLoading ? 'wait' : 'pointer',
        opacity: isLoading ? 0.7 : 1
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => !isLoading && fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileInput} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />
      
      <div style={{ 
        width: '64px', 
        height: '64px', 
        background: 'rgba(255,255,255,0.1)', 
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px',
        color: '#fff'
      }}>
        {isLoading ? (
          <div className="spinner" style={{ animation: 'spin 1s linear infinite' }}>⏳</div>
        ) : (
          <Camera size={32} />
        )}
      </div>

      <h3 style={{ marginBottom: '8px' }}>
        {isLoading ? '분석 중...' : '스크린샷 업로드'}
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        {isLoading ? '잠시만 기다려주세요' : '클릭하거나 이미지를 드래그하세요'}
      </p>
    </div>
  );
};

export default FileUpload;
