import axios from 'axios';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

// function to get the access token from Spotify API; want seperate file for easier debug
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

    // logs token response for easier debug
    console.log('Token response:', response.data);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error);
  }
}

// function to search playlists based on the keyword; uses spotitfy api functions + docs
async function searchPlaylists(keyword) {
  const token = await getToken();
  console.log('Token:', token);

  // logs the search url
  const searchUrl = `https://api.spotify.com/v1/search?q=${keyword}&type=playlist&limit=10`;
  console.log('Search URL:', searchUrl);

  try {
    const response = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    // logs the response data
    console.log('Playlists response:', response.data);
    return response.data.playlists.items;
  } catch (error) {
    console.error('Error fetching playlists:', error);
  }
}

export { searchPlaylists };
