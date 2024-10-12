import React from 'react';

export const LogoNavbar = () => {
    return (
      <div className="logo-container font-sans text-white p-2 h-full w-full">
        <div className="logo-inner h-full">
          <span className="initials text-xl sm:text-2xl">LM</span>
          <span className="full-name text-sm sm:text-base ml-2">&nbsp;Luis Mora</span>
        </div>
        <style jsx>{`
          .logo-container {
            background: linear-gradient(135deg, #3498db, #2980b9);
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            position: relative;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 55%;
            width: 100%;
          }
          .logo-container:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
          }
          .logo-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            transform: rotate(45deg);
            transition: all 0.5s ease;
          }
          .logo-container:hover::before {
            top: -75%;
            left: -75%;
          }
          .logo-inner {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
          }
          .initials {
            font-weight: bold;
            position: relative;
            color: white;
          }
          .initials::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: white;
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }
          .logo-container:hover .initials::after {
            transform: scaleX(1);
          }
          .full-name {
            font-weight: 300;
            letter-spacing: 0.5px;
            color: white;
          }
        `}</style>
      </div>
    );
  };