'use client';

import { useState } from 'react';

export default function ContactPageEditor() {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = async () => {
    setStatus('Saving...');
    try {
      await fetch('/api/admin/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Contact',
          slug: 'contact',
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
      <h2 className="text-xl font-bold mb-4">Edit Contact Page</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contact page content..."
        className="border p-2 w-full h-40"
      />
      <div className="mt-4 flex gap-2">
        <button onClick={handleSave} className="bg-purple-500 text-white p-2 rounded">
          Save
        </button>
        {status && <span>{status}</span>}
      </div>
    </div>
  );
}
