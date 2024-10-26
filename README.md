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
5. Set Up Environment Variables

   Create your Spotify API client secret and client id and add them to your .env file. Please make sure that they are in this formatL
   ```
   REACT_APP_SPOTIFY_CLIENT_ID=your_id
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_secret
   ```
6. Run the App

   Start the development server by running:
   ```
   npm start
   ```
Enjoy the app! You can now use the Spotify Mood Playlist Finder app! Enter a mood or keyword in the search box, and the app will display 10 random playlists based on your input.

## API Usage
I used the Spotify API for this project, as it is the music platform I regularly use. The spotify API is free to use, and it is integrated into the project in the Spotify.js file. The program uses the "search playlist" feature of the API. It takes the first 50 playlists from the keywords a user searches and randomly displays 10 to the user. That function is then imported into the App.js file.

## AI Generation

The AI generated code is primarily used to style the program. While I coded parts to search playlists from the Spotify API and randomly select a few 
(primarily the Spotify.js file and the beginning portion of the App.js file til the formatting of the application), I prompted Chat-GPT to help generate general code on how to structure an application like this (ex. should the playlists be numbered? how should the playlists be aligned on the page?). From there, I was able to implement that general code into this project - I added the specific colors I wanted and played around with the padding until I was satisfied with the results. As such, the formatting credits primarily go to AI (which is highlighted in the App.js file).
