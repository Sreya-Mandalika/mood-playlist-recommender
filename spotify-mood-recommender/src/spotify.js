import axios from 'axios';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

// Function to get the access token from Spotify API
async function getToken() {
  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  try {
    const response = await axios.post(tokenUrl, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
    });

    console.log('Token response:', response.data); // Log the token response
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error);
  }
}

// Function to search playlists based on keyword
async function searchPlaylists(keyword) {
  const token = await getToken();
  console.log('Token:', token); // Check if token is received

  const searchUrl = `https://api.spotify.com/v1/search?q=${keyword}&type=playlist&limit=10`;
  console.log('Search URL:', searchUrl); // Log the search URL

  try {
    const response = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    console.log('Playlists response:', response.data); // Log the response data
    return response.data.playlists.items;
  } catch (error) {
    console.error('Error fetching playlists:', error);
  }
}

export { searchPlaylists };
