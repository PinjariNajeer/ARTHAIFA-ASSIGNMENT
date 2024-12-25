
import React, { useState, useEffect } from 'react';
import './App.css'
const TextTool = () => {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [stats, setStats] = useState({ wordCount: 0, uniqueWords: 0, charCount: 0 });

  useEffect(() => {
    const words = text.match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words.map((word) => word.toLowerCase()));
    const charCount = text.replace(/[^a-zA-Z0-9]/g, '').length;
    setStats({
      wordCount: words.length,
      uniqueWords: uniqueWords.size,
      charCount: charCount,
    });
  }, [text]);

  const handleReplace = () => {
    setText(text.replaceAll(searchText, replaceText));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Type your text here..."
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginRight: '5px' }}
        />
        <input
          type="text"
          placeholder="Replace"
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
          style={{ marginRight: '5px' }}
        />
        <button onClick={handleReplace}>Replace</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Word Count:</strong> {stats.wordCount}</p>
        <p><strong>Unique Words:</strong> {stats.uniqueWords}</p>
        <p><strong>Character Count (Excl. Spaces/Punctuation):</strong> {stats.charCount}</p>
      </div>
    </div>
  );
};

export default TextTool;
