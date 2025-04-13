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

    games.forEach((game, index) => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');

        gameElement.innerHTML = `
            <h2>${game.title}</h2>
            <p><strong>Year:</strong> ${game.year} <strong>Players:</strong> ${game.players} <strong>Time:</strong> ${game.time} <strong>Difficulty:</strong> ${game.difficulty}</p>
            <p><strong>Designer:</strong> ${game.designer}</p>
            <p><strong>Artist:</strong> ${game.artist}</p>
            <p><strong>Publisher:</strong> ${game.publisher}</p>
            <p><strong>BGG Listing:</strong> <a href="${game.url}" target="_blank">${game.url}</a></p>
            <p><strong>Playcount:</strong> <span class="playcount">${game.playCount}</span> <button class="increment-button">+</button></p>
            <p><strong>Rating:</strong> <input type="range" min="1" max="10" value="${game.personalRating}" class="rating-slider"> <span class="rating-value">${game.personalRating}</span></p>
        `;

        const incrementButton = gameElement.querySelector('.increment-button');
        incrementButton.addEventListener('click', () => {
            game.playCount++;
            gameElement.querySelector('.playcount').textContent = game.playCount;
            updateGameInLocalStorage(index, game);
        });

        const ratingSlider = gameElement.querySelector('.rating-slider');
        const ratingValue = gameElement.querySelector('.rating-value');
        ratingSlider.addEventListener('input', () => {
            game.personalRating = parseInt(ratingSlider.value, 10);
            ratingValue.textContent = game.personalRating;
            updateGameInLocalStorage(index, game);
        });

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
            Game.importGamesFromJSON(jsonData); 
            loadGames(); 
            console.log("Games imported successfully!");
        } catch (error) {
            console.error("Error importing games:", error);
        }
    };
    reader.readAsText(file);
}

document.getElementById('importSource').addEventListener('change', handleFileImport);

// Load games into memory when the app starts
loadGames();

function updateGameInLocalStorage(index, updatedGame) {
    games[index] = updatedGame;

    // Save the updated game to localStorage
    const gameKey = `game_${updatedGame.title.replace(/\s+/g, '_')}_${updatedGame.year}`;
    localStorage.setItem(gameKey, JSON.stringify(updatedGame));
}
