import React from 'react';

const PlanBox = ({ title, selected, onClick }) => {
  return (
    <div
      className={`relative w-32 h-32 flex items-center justify-center cursor-pointer rounded-sm ${
        selected ? 'bg-[#004E96]' : 'bg-[#547696]'
      }`}
      onClick={onClick}
    >
      {selected && (
        <div
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderBottom: 'none',
            borderTop: 'solid 15px #004E96',
            borderLeft: 'solid 15px transparent',
            borderRight: 'solid 15px transparent',
          }}
        ></div>
      )}
      <p className={`text-white text-xl font-semibold `}>
        {title}
      </p>
    </div>
  );
};

export default PlanBox;
