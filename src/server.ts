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
            item: { id: "0" },
            children: [
              {
                id: 2,
                item: { id: "2" },
                children: [
                  {
                    id: 4,
                    item: { id: "4" },
                    children: [
                      {
                        id: 5,
                        item: { id: "5" },
                        children: []
                      }
                    ]
                  },
                  {
                    id: 3,
                    item: { id: "3" },
                    children: []
                  }
                ]
              },
              {
                id: 1,
                item: { id: "1" },
                children: [
                  {
                    id: 6,
                    item: { id: "6" },
                    children: []
                  },
                  {
                    id: 7,
                    item: { id: "7" },
                    children: []
                  },
                  {
                    id: 8,
                    item: { id: "8" },
                    children: []
                  }
                ]
              }
            ]
          }
        })
      })
    }
  });

  return server;
}
