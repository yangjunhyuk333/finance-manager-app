import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import FileUpload from '../components/FileUpload';

const AddAsset = () => {
    const navigate = useNavigate();
    const [analyzing, setAnalyzing] = useState(false);
    const [analyzedData, setAnalyzedData] = useState(null);

    // Mock Gemini Analysis (Will be replaced with real API)
    const handleFileSelect = async (file) => {
        setAnalyzing(true);

        // Simulate API delay
        setTimeout(() => {
            setAnalyzing(false);
            // Mock result
            setAnalyzedData({
                bankName: '국민은행',
                productName: 'KB국민ONE적금',
                interestRate: 3.5,
                targetAmount: 10000000,
                maturityDate: '2026-12-31'
            });
        }, 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('저장 기능은 아직 구현되지 않았습니다 (Firebase 설정 필요).');
    };

    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginRight: '16px' }}
                >
                    <ChevronLeft size={28} />
                </button>
                <h2>자산 추가</h2>
            </div>

            {/* Step 1: Upload */}
            {!analyzedData && (
                <section>
                    <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
                        예적금 상품의 스크린샷을 올리면 AI가 정보를 자동으로 입력해줍니다.
                    </p>
                    <FileUpload onFileSelect={handleFileSelect} isLoading={analyzing} />
                </section>
            )}

            {/* Step 2: Confirm/Edit Form */}
            {analyzedData && (
                <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '20px' }}>
                    <h3 style={{ marginBottom: '20px' }}>상세 정보 확인</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>은행명</label>
                        <input
                            className="glass-input"
                            defaultValue={analyzedData.bankName}
                        />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>상품명</label>
                        <input
                            className="glass-input"
                            defaultValue={analyzedData.productName}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ flex: 1, marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>이자율 (%)</label>
                            <input
                                type="number"
                                step="0.01"
                                className="glass-input"
                                defaultValue={analyzedData.interestRate}
                            />
                        </div>
                        <div style={{ flex: 1, marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>만기일</label>
                            <input
                                type="date"
                                className="glass-input"
                                defaultValue={analyzedData.maturityDate}
                            />
                        </div>
                    </div>

                    <button type="submit" className="glass-button primary" style={{ width: '100%', marginTop: '12px' }}>
                        자산 저장하기
                    </button>

                    <button
                        type="button"
                        onClick={() => setAnalyzedData(null)}
                        className="glass-button"
                        style={{ width: '100%', marginTop: '12px', background: 'transparent' }}
                    >
                        다시 올리기
                    </button>
                </form>
            )}
        </div>
    );
};

export default AddAsset;
