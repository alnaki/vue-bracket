import { Server } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    routes() {
      this.get('/bracket/:id', () => {
        return (
          {
            id: '1',
            name: 'Ma partie de ouf',
            editionMode: true,
            nbRoundMax: 0, // 0 -> infini
            nbTeamMaxByDuel: 2,
            nbTeamWinner: 1,
            rounds: [
              {
                id: '1',
                name: 'Round 1',
                roundNumber: 1,
                duels: [{
                  id: '1',
                  duelScores: [{
                    idTeam: '1',
                    score: 1
                  },
                  {
                    idTeam: '1',
                    score: 1
                  }]
                }, {
                  id: '2',
                  duelScores: [{
                    idTeam: '1',
                    score: 1
                  }, {
                    idTeam: '1',
                    score: 1
                  }]
                }, {
                  id: '3',
                  duelScores: [{
                    idTeam: '1',
                    score: 1
                  }, {
                    idTeam: '1',
                    score: 1
                  }]
                }, {
                  id: '4',
                  duelScores: [{
                    idTeam: '1',
                    score: 1
                  }, {
                    idTeam: '1',
                    score: 1
                  }]
                }]
              },
              {
                id: '2',
                name: 'Round 2',
                roundNumber: 1,
                duels: [{
                  id: '5',
                  duelScores: [{
                    idTeam: '1',
                    score: 1
                  }, {
                    idTeam: '1',
                    score: 1
                  }]
                }, {
                  id: '6',
                  duelScores: [{
                    idTeam: '1',
                    score: 1
                  }, {
                    idTeam: '1',
                    score: 1
                  }]
                }]
              },
              {
                id: '3',
                name: 'Round 3',
                roundNumber: 1,
                duels: [{
                  id: '7',
                  duelScores: [{
                    idTeam: '1',
                    score: 1
                  }, {
                    idTeam: '1',
                    score: 1
                  }]
                }]
              }
            ],
            teams: [
              {
                id: '1',
                name: 'Team 1',
                playersId: []
              }
            ]
          }
        );
      });
    }
  });

  return server;
}
