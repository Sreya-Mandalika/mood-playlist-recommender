// importing react, search playlists function from spotify api docs, and css file
import React, { useState } from 'react';
import { searchPlaylists } from './spotify';
import './App.css';

function App() {
  // stating variables for the search keyword and the playlist that are retrieved 
  const [keyword, setKeyword] = useState('');
  const [playlists, setPlaylists] = useState([]);

  // function to capitalize the first letter of each word in a string - checks for apostrophe's & uppercasse
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

  // function for the search word submission - error check; prevents empty cells
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) { 
      alert("Please enter a mood or keyword!"); 
      return;
    }

    // calls the searchPlaylists function and sets the playlists with the results
    const results = await searchPlaylists(keyword);
    setPlaylists(results); 
  };

  // formatting for the title - white font and with and emoji - generally AI generated, adjusted colors + size
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
              // input field for the mood/keyword; a textboc
              type="text"
              placeholder="Enter a mood or keyword!"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={{ padding: '15px', width: '300px', marginRight: '10px', fontSize: '16px', borderRadius: '5px' }}
            />
            <button type="submit" style={{ padding: '15px 30px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#1DB954', color: '#fff', border: 'none' }}>
              Search // Button to submit the form
            </button>
          </form>

          {/* Playlist results */}
          <div style={{ marginTop: '20px' }}>
            {playlists && playlists.length > 0 ? ( // checks to see if there's actually playlists to display
              <ul style={{ listStyleType: 'none', padding: 0, color: '#fff', textAlign: 'left', margin: 0 }}>
                {playlists.map((playlist) => ( 
                  <li key={playlist.id} style={{ margin: '15px 0', padding: '10px', fontSize: '18px', backgroundColor: '#333', borderRadius: '8px', border: '2px solid #1DB954' }}>
                    <a 
                      // links to the spotify playlists and opens in the users spotify tab
                      href={playlist.external_urls.spotify} 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: '#1DB954', fontWeight: 'bold' }}
                    >
                      {capitalizeWords(playlist.name)} // Display the playlist name with capitalized words
                    </a>
                    <p style={{ color: '#ccc', margin: '5px 0 0 0' }}>
                      Created by: {playlist.owner.display_name} // Show the playlist creator's name
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              // if no playlists are found
              <p style={{ color: '#fff' }}>No playlists found. Try another mood!</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
