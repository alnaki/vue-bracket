import { Server } from 'miragejs';

export function makeServer() {
  const server = new Server({
    routes() {
      this.get('/bracket/:id', () => {
        return ({
          id: "1",
          name: "My test bracket",
          editionMode: false,
          nbTeamMaxByDuel: 2,
          nbTeamWinner: 1,
          bracketNode: {
            id: 0,
            item: { id: "1" },
            children: [
              {
                id: 2,
                item: { id: "1" },
                children: [
                  {
                    id: 4,
                    item: { id: "1" },
                    children: [
                      {
                        id: 5,
                        item: { id: "1" },
                        children: []
                      }
                    ]
                  },
                  {
                    id: 3,
                    item: { id: "1" },
                    children: []
                  }
                ]
              },
              {
                id: 1,
                item: { id: "1" },
                children: []
              }
            ]
          }
        })
      })
    }
  });

  return server;
}
