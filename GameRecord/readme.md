Step 1: GitHub Connection:
Set up Git locally and connected it to a GitHub repo
Committed all project files so the code is version-controlled and backed up online

Step 2: Game Class Setup:
Looked at the example.json file to understand how the game data is structured
Created a Game class in models/Game.js that matches the structure (with properties like title, designer, rating, etc.)
Exported the class and imported it into app.mjs to create game instances from the JSON data

Step 3: LocalStorage Support:
Added a save() method to the Game class to store each game in localStorage individually
Created functions to:
Load all saved games from localStorage
Export all games as a JSON string
Import games from a JSON string
Each game is saved with a unique key (game_Title) — no arrays in storage

Step 4: File Import and In-Memory Games Array:
Added an input element with id="importSource" in index.html to allow users to upload a JSON file
Created an in-memory games array in app.mjs to keep track of all games loaded from localStorage
Implemented a loadGames function to populate the games array when the application starts
Used the FileReader API in app.mjs to read JSON files and import game data into localStorage using the Game.importGamesFromJSON method
Attached an event listener to the file input to trigger the import process when a file is selected
Updated the games array after importing games to ensure it stays in sync with localStorage

Step 5: Visual Representation of Games:
Added a renderGames function in app.mjs to dynamically display all games in the gameContainer div in index.html.
Each game is displayed with the following details:
  Title and year
  Designer
  Number of players
  Playtime
  Difficulty
  Play count
  Personal rating
Included a range input input type="range" for adjusting the personal rating and a delete button button for each game.
Updated the loadGames function to call renderGames after loading games from localStorage, ensuring the UI is updated whenever the application starts or games are imported.
Added a container div id="gameContainer" in index.html to hold the visual representation of the games.

Step 6: Interactive Play Count and Rating:
Made the play count and rating sliders interactive for each game.
Added functionality to the "+" button next to the play count. Clicking it increases the play count for the game and updates the display immediately.
Made the rating slider functional. Moving the slider updates the game's personal rating in real-time and displays the new value.
Ensured that changes to the play count and rating are saved to both the in-memory games array and localStorage, so the updates persist even after refreshing the page.
Created a helper function updateGameInLocalStorage to handle saving updated game data to localStorage whenever a change is made.
These changes make the application more dynamic and allow users to track their game stats directly from the UI.