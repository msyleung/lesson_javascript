const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];

const getScoreLine = ({ awayTeam, homeTeam }) => {
  const teamNames = `${awayTeam.team} @ ${homeTeam.team}`;
  const scores = awayTeam.isWinner
    ? `<b>${awayTeam.points}</b> - ${homeTeam.points}`
    : `${awayTeam.points} - <b>${homeTeam.points}</b>`;
  return `${teamNames} ${scores}`;
};

const supportStyle = (supporting, { homeTeam, awayTeam }) => {
  const support = homeTeam.team === supporting ? homeTeam : awayTeam;
  return support.isWinner ? "winner" : "loser";
};

const makeChart = (games, supporting) => {
  const ulParent = document.createElement("ul");
  games.forEach(game => {
    const { homeTeam, awayTeam } = game;
    let liChild = document.createElement("li");
    liChild.innerHTML = getScoreLine(game);
    liChild.classList.add(supportStyle(supporting, game));
    ulParent.appendChild(liChild);
  });
  return ulParent;
};
const golden = document
  .querySelector("#golden")
  .append(makeChart(warriorsGames, "Golden State"));

const houston = document
  .querySelector("#houston")
  .append(makeChart(warriorsGames, "Houston"));
