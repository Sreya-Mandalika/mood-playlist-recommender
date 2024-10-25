import React, { useState } from 'react';
import { searchPlaylists } from './spotify';
import './App.css'; 

function App() {
  const [keyword, setKeyword] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const capitalizeWords = (str) => {
    return str.split(' ').map(word => {
      if (word.toUpperCase() === word) {
        return word;
      }

      if (word.match(/'\w+/)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) {
      alert("Please enter a mood or keyword!");
      return;
    }
    const results = await searchPlaylists(keyword);
    setPlaylists(results);
  };

  return (
    <div className="App" style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px' }}>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '20px' }}>
          <span role="img" aria-label="music">🎶</span> Spotify Mood Playlist Finder
        </h1>

        {/* Container for search box and playlists */}
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <input
              type="text"
              placeholder="Enter a mood or keyword!"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={{ padding: '15px', width: '300px', marginRight: '10px', fontSize: '16px', borderRadius: '5px' }}
            />
            <button type="submit" style={{ padding: '15px 30px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#1DB954', color: '#fff', border: 'none' }}>
              Search
            </button>
          </form>

          {/* Playlist results */}
          <div style={{ marginTop: '20px' }}>
            {playlists && playlists.length > 0 ? (
              <ul style={{ listStyleType: 'none', padding: 0, color: '#fff', textAlign: 'left', margin: 0 }}>
                {playlists.map((playlist) => (
                  <li key={playlist.id} style={{ margin: '15px 0', padding: '10px', fontSize: '18px', backgroundColor: '#333', borderRadius: '8px', border: '2px solid #1DB954' }}>
                    <a 
                      href={playlist.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: '#1DB954', fontWeight: 'bold' }}
                    >
                      {capitalizeWords(playlist.name)}
                    </a>
                    <p style={{ color: '#ccc', margin: '5px 0 0 0' }}>
                      Created by: {playlist.owner.display_name}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#fff' }}>No playlists found. Try another mood!</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
