'use client';

import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";

import useDeviceDetector from "@/hooks/useDeviceDetector";

import './index.css';

export default function BurgerMenu({ children }: { children: ReactNode }) {
  const { isMobile } = useDeviceDetector();
  const [isOpen, setIsOpen] = useState(false);

  if (!isMobile) {
    return children;
  }

  return (
    <div className="burger-menu-holder">
      <button
        className={`burger-menu-button ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`burger-content ${isOpen ? 'show' : ''}`}>
        <nav className="burger-nav" onClick={() => setIsOpen(!isOpen)}>
          {children}
        </nav>
      </div>
    </div>
  );
};

// 'use client';
//
// import {ReactNode} from "react";
//
// import useDeviceDetector from "@/hooks/useDeviceDetector";
//
// export default function BurgerMenu({ children }: { children: ReactNode }) {
//   const { isMobile } = useDeviceDetector();
//
//   if (!isMobile) {
//     return children;
//   }
//
//   return (
//     <div className="burger-menu">
//       {children}
//     </div>
//   )
// };
