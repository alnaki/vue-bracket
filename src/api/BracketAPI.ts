import IBracket from '@/models/IBracket'

/**
 * Mocking client-server processing
 */
const _bracket: IBracket = {
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
                duelsScore: [{
                    idTeam: '1',
                    score: 1
                },
                {
                    idTeam: '1',
                    score: 1
                }]
            }, {
                id: '1',
                duelsScore: [{
                    idTeam: '1',
                    score: 1
                }, {
                    idTeam: '1',
                    score: 1
                }]
            }, {
                id: '1',
                duelsScore: [{
                    idTeam: '1',
                    score: 1
                }, {
                    idTeam: '1',
                    score: 1
                }]
            }, {
                id: '1',
                duelsScore: [{
                    idTeam: '1',
                    score: 1
                }, {
                    idTeam: '1',
                    score: 1
                }]
            }]
        },
        {
            id: '1',
            name: 'Round 1',
            roundNumber: 1,
            duels: [{
                id: '1',
                duelsScore: [{
                    idTeam: '1',
                    score: 1
                }, {
                    idTeam: '1',
                    score: 1
                }]
            }, {
                id: '1',
                duelsScore: []
            }]
        },
        {
            id: '1',
            name: 'Round 1',
            roundNumber: 1,
            duels: [{
                id: '1',
                duelsScore: [{
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

export default {

}