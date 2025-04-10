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