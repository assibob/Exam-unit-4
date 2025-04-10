export default class Game {
    constructor({
      title,
      designer,
      artist,
      publisher,
      year,
      players,
      time,
      difficulty,
      url,
      playCount,
      personalRating
    }) {
      this.title = title;
      this.designer = designer;
      this.artist = artist;
      this.publisher = publisher;
      this.year = year;
      this.players = players;
      this.time = time;
      this.difficulty = difficulty;
      this.url = url;
      this.playCount = playCount;
      this.personalRating = personalRating;
    }
  
    getSummary() {
      return `${this.title} (${this.year}) by ${this.designer} – ${this.players} players, ${this.time}, Difficulty: ${this.difficulty}`;
    }

    saveToLocalStorage() {
      const gameKey = `game_${this.title.replace(/\s+/g, '_')}_${this.year}`;
      localStorage.setItem(gameKey, JSON.stringify(this));
    }

    static getAllGamesFromLocalStorage() {
      const games = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('game_')) {
          const gameData = JSON.parse(localStorage.getItem(key));
          games.push(gameData);
        }
      }
      return games;
    }

    static exportGamesAsJSON() {
      const games = Game.getAllGamesFromLocalStorage();
      return JSON.stringify(games, null, 2);
    }

    static importGamesFromJSON(jsonData) {
      const games = JSON.parse(jsonData);
      games.forEach(gameData => {
        const game = new Game(gameData);
        game.saveToLocalStorage();
      });
    }
}