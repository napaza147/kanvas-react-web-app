import React from 'react';

const PercentageIndicator: React.FC = () => {
  return (
    <div className="rounded-pill p-2 me-2" style={{ backgroundColor: 'transparent', border: '1px solid #ccc', fontSize: '1rem' }}>
      (40% of total)
    </div>
  );
};

export default PercentageIndicator;
