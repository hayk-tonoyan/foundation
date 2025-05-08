'use client';

import { useState } from 'react';

import AboutUsPageEditor from '@/appPages/Admin/pages/About';
import ContactPageEditor from '@/appPages/Admin/pages/Contact';
import HomePageEditor from '@/appPages/Admin/pages/Home';

import styles from './AdminPanel.module.css';

const tabs = [
  { key: 'home', label: 'Home Page' },
  { key: 'about-us', label: 'About Us Page' },
  { key: 'contact', label: 'Contact Page' },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePageEditor />;
      case 'about-us':
        return <AboutUsPageEditor />;
      case 'contact':
        return <ContactPageEditor />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.key}
              //eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              tabIndex={0}
              className={`${styles.tabItem} ${activeTab === tab.key ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveTab(tab.key);
                }
              }}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.content}>
        {renderContent()}
      </main>
    </div>
  );
}
