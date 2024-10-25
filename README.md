# Welcome to the Spotify Mood (& Keyword) Recommender 🎶
## Project Overview
This is a problem I commonly face: when I search for new playlists using a keyword (usually a mood) in my Spotify app or browser, it always gives me the names of 
songs in my playlists or my own/my friends playlists (that are close to that keyword) rather than popular playlists that Spotify or other users make. Additionally,
it's time consuming to keep scrolling down for new playlists. 

To address this problem, this application takes a list of spotify playlists using the **Spotify API** (specifically the **search playlist
feature**) and provides a random list of playlists, its creators, and the links to each of those playlists.

## Set Up Instructions
1. Clone the repository
   
   ```
   git clone https://github.com/Sreya-Mandalika/mood-playlist-recommender.git
   ```
2. Navigate into the cloned directory
   ```
   cd mood-playlist-recommender
    ```
3. Check if Node.js and npm are installed

   Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can check this by running `node -v` and `npm -v` in your terminal.
   Otherwise, you can install it at the Node.js official website.

4. Install Dependencies

  In the terminal, while in the project directory, run the following command to install the necessary dependencies:
  ```
  npm install
  ```
5. Set Up Environment Variables:

Create a .env file in the root of your project directory to store your Spotify API credentials.
Add your Spotify API access token (or any other necessary environment variables) to the .env file in the format:
makefile
Copy code
REACT_APP_SPOTIFY_ACCESS_TOKEN=your_access_token_here
Make sure to replace your_access_token_here with your actual Spotify API access token.
Run the App:

Start the development server by running:
bash
Copy code
npm start
This command will start the app and open it in your default web browser. If it doesn't open automatically, you can access it by going to http://localhost:3000.
Enjoy the App:

You can now use the Spotify Mood Playlist Finder app! Enter a mood or keyword in the search box, and the app will display 10 random playlists based on your input.

Instructions on how to set up and run the project.
Information about the API used and how it's integrated.
Credits for AI-generated code portions - tell me how you used it.
