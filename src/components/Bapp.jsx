import React from 'react';
import { useNavigate } from 'react-router-dom';
import party from 'party-js';

const Bapp = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      party.confetti(document.body, {
        count: party.variation.range(120, 150),
        spread: 100,
        speed: party.variation.range(300, 600),
        shapes: ['circle', 'square'],
      });
    }

    setTimeout(() => {
      navigate('/birthday-wishes');
    }, 500);
  };

  return (
    <div className="min-h-screen w-full bg-rose-950/80 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md flex justify-center mx-auto">
            <button
                onClick={handleClick}
                className="bg-rose-950 hover:bg-rose-100 text-white hover:text-rose-950 font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 flex items-center justify-center w-fit md:w-full h-full text-center text-lg sm:text-xl"
            >
                Click to gain access
            </button>
       </div> 
    </div>
  );
};
export default Bapp;