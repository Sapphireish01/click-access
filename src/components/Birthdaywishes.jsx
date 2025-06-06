import React, { useState, useRef } from 'react';
import couplez from '../assets/couplez.jpg';
import famz from '../assets/famz-pics.jpg';
import dpics from '../assets/d-pics.jpg';


const BirthdayWishes = () => {
  const message = [
        
    {
    id: '2',
    textTitle: 'Happy Birthday my Love💕!',
    text: "Happy Birthday to my amazing husband! May your day be filled with joy, laughter, and everything that brings you happiness. I pray that God continues to bless you with good health, strength, and a loving heart. May this year be filled with blessings, adventures, and cherished moments together. I love you more than words can say!",
    sender: 'Your Loving Wife',
    img: couplez
    },
    {
    id: '3',
    textTitle: 'Happy Birthday to the Best Dad in the World!',
    text: "Happy Birthday to the most incredible dad! From the day you visited my prize-giving ceremony and also the day you gifted me a tab, you’ve given me memories that made me feel ultimately loved and the happiest in the world. Your kindness, support, and unwavering love mean everything to me. Today, I celebrate you—the man who has shaped my world in the best ways possible. May your day be as joyful and special as the love you’ve always shown me. Wishing you good health, happiness, and all the wonderful things life has to offer. Love you, Dad!",
    sender: 'Oyin',
    img: famz
    },
    {
    id: '4',
    textTitle: 'Happy Birthday, Daddy! 🎉',
    text: "Happy birthday daddy, I love you daddy❤️",
    sender: 'Ola',
    img: famz
    },
    {
    id: '1',
    textTitle: 'Happy Birthday, Uncle!',
    text: "Happy Birthday, Uncle! Another year wiser, funnier, and even more deserving of an award for putting up with the family! May your day be filled with joy, laughter, and cake—lots of cake (because, let’s be honest, that’s the best part). Wishing you a year ahead that's as amazing as you are—filled with good health, happiness, and fewer reasons to shake your head at our antics. Enjoy your special day!",
    sender: 'Simi',
    img: dpics
    },
    
  ]
  
  return (
    <div className="min-h-screen w-full bg-rose-700/20 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md flex justify-center mx-auto">
        <div className="sm:p-8 w-full text-center animate-fade-slide-in">
          <div className='h-[5vh]'></div>
          <div className="text-4xl sm:text-5xl mb-4 animate-bounce">🎂🎈</div>
         
          <div>
            {message.map((wish) => (
              <div key={wish.id} className="mb-10 bg-rose-700/10 rounded-lg shadow-md p-6 ">
                <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-2">
                  {wish.textTitle}
                </h1>
                <p className="text-red-700 text-base sm:text-lg mb-4">
                  {wish.text}
                </p>
                <p>
                  <span className="text-2xl sm:text-3xl font-bold text-red-700">With love,</span>
                  <br />
                  <span className="text-lg sm:text-xl text-red-700">{wish.sender}</span>
                </p>
                {wish.img && (
                  <img
                    src={wish.img}
                    alt='daddy'
                    className="mt-4 w-full h-auto rounded-lg shadow-md"
                  />
                )}
              </div>
            ))}
          </div>
        
          <style>{`
            @keyframes fade-slide-in {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-slide-in {
              animation: fade-slide-in 0.8s ease-out;
            }
          `}</style>
      </div>
    </div>
    </div>
  );
};

export default BirthdayWishes;
