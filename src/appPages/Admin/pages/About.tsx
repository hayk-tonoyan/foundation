'use client';

import { useState } from 'react';

export default function AboutUsPageEditor() {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = async () => {
    setStatus('Saving...');
    try {
      await fetch('/api/admin/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'About Us',
          slug: 'about-us',
          lang: 'en',
          content,
        }),
      });
      setStatus('Saved!');
    } catch (err) {
      setStatus('Error saving');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit About Us Page</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="About Us page content..."
        className="border p-2 w-full h-40"
      />
      <div className="mt-4 flex gap-2">
        <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded">
          Save
        </button>
        {status && <span>{status}</span>}
      </div>
    </div>
  );
}
