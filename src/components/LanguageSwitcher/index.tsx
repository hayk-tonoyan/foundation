'use client';

import { usePathname } from "next/navigation";
import { useState } from 'react';

import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

import './index.css';

const findLanguage = (value: string) => {
  if (value.includes('/en')) {
    return '🇬🇧 EN';
  } else if (value.includes('/am')) {
    return '🇦🇲 AM';
  }
  return '🇳🇱 NL';
}

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguageSwitcher();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(findLanguage(pathname) || null);
  const [showLanguages, setShowLanguages] = useState(false);

  const handleSelectLanguage = (lang: string, label: string, emoji: string) => {
    switchLanguage(lang);
    setSelectedLanguage(`${emoji} ${label}`);
    setShowLanguages(false);
  };

  return (
    <div className="language-switcher" style={{ position: 'relative', fontFamily: 'Arial, sans-serif' }}>
      <button onClick={() => setShowLanguages(prev => !prev)} className="dropdown-btn">
        <span style={{ fontSize: '16px' }}>{selectedLanguage || 'Select Language'}</span>
      </button>
      {showLanguages && (
        <div className="dropdown-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 1,
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#fff',
          width: 'max-content',
          color: 'black',
        }}>
          <button
            onClick={() => handleSelectLanguage('nl', 'Dutch', '🇳🇱')}
            className="dropdown-item"
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #ddd',
              background: 'none',
              border: 'none',
              width: '100%',
              textAlign: 'left'
            }}
          >
            🇳🇱 NL
          </button>
          <button
            onClick={() => handleSelectLanguage('en', 'English', '🇬🇧')}
            className="dropdown-item"
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #ddd',
              background: 'none',
              border: 'none',
              width: '100%',
              textAlign: 'left'
            }}
          >
            🇬🇧 EN
          </button>
          <button
            onClick={() => handleSelectLanguage('am', 'Armenia', '🇦🇲')}
            className="dropdown-item"
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #ddd',
              background: 'none',
              border: 'none',
              width: '100%',
              textAlign: 'left'
            }}
          >
            🇦🇲 AM
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
