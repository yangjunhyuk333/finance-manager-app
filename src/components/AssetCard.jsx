import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

const AssetCard = ({ asset }) => {
    const { bankName, productName, amount, interestRate, maturityDate } = asset;

    // Calculate expected interest (Simple interest approximation)
    // Interest = Principal * Rate * (Time in years)
    // For simplicity, showing annual interest entitlement
    const expectedInterest = Math.floor(amount * (interestRate / 100));

    return (
        <div className="glass-panel" style={{ padding: '20px', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                        {bankName}
                    </span>
                    <h3 style={{ fontSize: '1.1rem' }}>{productName}</h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <span style={{
                        background: 'rgba(255, 0, 128, 0.1)',
                        color: '#ff0080',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 600
                    }}>
                        {interestRate}%
                    </span>
                </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
                <h2 style={{ fontSize: '1.5rem' }}>
                    {amount.toLocaleString()} <span style={{ fontSize: '1rem', fontWeight: 400 }}>원</span>
                </h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <TrendingUp size={14} />
                    <span>+{expectedInterest.toLocaleString()}원 (예상)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    <span>{maturityDate} 만기</span>
                </div>
            </div>
        </div>
    );
};

export default AssetCard;
