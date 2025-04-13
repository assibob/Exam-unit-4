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

Step 7 and 8: Adding New Games:
Added a form in index.html to allow users to add new games to the listing.
The form collects details like title, designer, year, players, play count, and personal rating.
Implemented a submit event listener in app.mjs to handle form submissions:
  Creates a new Game instance with the entered details.
  Saves the new game to localStorage and adds it to the games array.
  Re-renders the game list to include the newly added game.
  Resets the form after submission for convenience.
This feature allows users to expand their game collection directly from the UI.
I did both step 7 and 8 by mistake

Step 9: Deleting Games
Added a "Delete" button for each game in the UI.
Clicking the "Delete" button removes the game from the games array, localStorage, and the UI.
Implemented the deleteGame function in app.mjs to handle the deletion process:
  Identifies the game to be deleted using its unique key (e.g., game_Title_Year).
  Removes the game from localStorage using the localStorage.removeItem method.
  Removes the game from the in-memory games array using the splice method.
  Re-renders the game list to reflect the changes in the UI.
This feature allows users to easily manage their game collection by removing unwanted entries.

Step 10: Sorting Games
Added a dropdown menu in index.html to allow users to sort the game listing by different criteria.
The dropdown includes the following sorting options:
  **Players**: Sorts games by the minimum number of players
  **Rating**: Sorts games by personal rating in descending order.
  **Difficulty**: Sorts games alphabetically by difficulty level.
  **Play Count**: Sorts games by the number of times the game has been played in descending order.
Implemented an event listener in app.mjs to detect changes in the dropdown menu:
  When a sorting option is selected, the games array is sorted based on the chosen criteria.
  After sorting, the renderGames function is called to update the UI with the newly sorted list.
This feature allows users to organize their game collection dynamically, making it easier to find and prioritize games based on their preferences.

Step 11: Styling the Game Display
Updated the style.css file to improve the visual appearance of the game listing.
Styled the game container and individual game cards to make them visually appealing:
  Added borders, rounded corners, and subtle shadows to each game card.
  Used a light background color for better readability.
Enhanced the game title with larger font size and bold color to make it stand out.
Styled the game details with consistent font size and spacing for better readability.
Improved the appearance of the BGG link:
  Added a blue color and underline on hover for better interactivity.
Styled the play count increment button:
  Added a blue background with white text and hover effects.
Styled the rating slider for better alignment and spacing.
Added styles for the "Delete" and "Edit" buttons:
  "Delete" button has a red background with hover effects.
  "Edit" button has a green background with hover effects.
These changes make the application visually appealing and easier to use, aligning with the example provided.
