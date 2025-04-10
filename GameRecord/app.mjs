import Game from './models/Game.mjs';

// In-memory array to keep track of all games
let games = [];

// Populate the games array when the application loads
function loadGames() {
    games = Game.getAllGamesFromLocalStorage();
    console.log("Games loaded into memory:", games);
    renderGames(); 
}

// Render games in the UI
function renderGames() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';

    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');

        gameElement.innerHTML = `
            <h2>${game.title} (${game.year})</h2>
            <p><strong>Designer:</strong> ${game.designer}</p>
            <p><strong>Players:</strong> ${game.players}</p>
            <p><strong>Time:</strong> ${game.time}</p>
            <p><strong>Difficulty:</strong> ${game.difficulty}</p>
            <p><strong>Play Count:</strong> ${game.playCount}</p>
            <p><strong>Personal Rating:</strong> ${game.personalRating}</p>
            <input type="range" min="1" max="10" value="${game.personalRating}" class="rating-slider">
            <button class="delete-button">Delete</button>
        `;

        gameContainer.appendChild(gameElement);
    });
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
