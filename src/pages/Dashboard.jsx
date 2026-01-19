import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Wallet, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    // Placeholder Data
    const assets = [
        // { id: 1, bank: 'Toass Bank', name: '키워봐요 적금', amount: 3000000, rate: 4.5, dDay: 50 },
    ];

    const totalAmount = assets.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="animate-fade-in">
            <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="text-gradient" style={{ fontSize: '1.8rem' }}>내 자산</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        오늘도 부자 되세요! 💰
                    </p>
                </div>
                <button
                    onClick={() => navigate('/add')}
                    className="glass-button"
                    style={{ borderRadius: '50%', width: '48px', height: '48px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Plus />
                </button>
            </header>

            {/* Summary Card */}
            <section className="glass-panel" style={{ padding: '24px', marginBottom: '32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Wallet size={16} /> 총 모은 금액
                    </p>
                    <h2 style={{ fontSize: '2.4rem' }}>
                        {totalAmount.toLocaleString()} <span style={{ fontSize: '1.2rem', fontWeight: 400 }}>원</span>
                    </h2>
                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                        <span style={{
                            background: 'rgba(0, 255, 128, 0.1)',
                            color: '#00ff80',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}>
                            <TrendingUp size={12} /> +4.2% (예상 이자)
                        </span>
                    </div>
                </div>
            </section>

            {/* Asset List */}
            <section>
                <h3 style={{ marginBottom: '16px' }}>자산 목록</h3>

                {assets.length === 0 ? (
                    <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', opacity: 0.8 }}>
                        <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>등록된 예적금이 없습니다.</p>
                        <button
                            onClick={() => navigate('/add')}
                            className="glass-button primary"
                        >
                            첫 자산 등록하기
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* List items will go here */}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Dashboard;
