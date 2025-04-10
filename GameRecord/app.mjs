import Game from './models/Game.mjs';

// In-memory array to keep track of all games
let games = [];

// Populate the games array when the application loads
function loadGames() {
    games = Game.getAllGamesFromLocalStorage();
    console.log("Games loaded into memory:", games);
}

// Handle file import and save games to localStorage
function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const jsonData = e.target.result;
            Game.importGamesFromJSON(jsonData); // Save games to localStorage
            loadGames(); // Refresh the in-memory games array
            console.log("Games imported successfully!");
        } catch (error) {
            console.error("Error importing games:", error);
        }
    };
    reader.readAsText(file);
}

// Attach event listener to the file input
document.getElementById('importSource').addEventListener('change', handleFileImport);

// Load games into memory when the app starts
loadGames();
