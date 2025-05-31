// tictactoe
// Game State - Data
// moves - choosing a square
// move(game) -> game
// EndCondition
// when i make a move, check to see if that should end the game.
// EndState -> Game State

// 1. Define the Game State - Good :)
// a. end state
// b. currentPlayer
// c. board
// 2. Define the Move function
// 3. I need define the end conditions

export type Cell = Player | null
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]
export type Player = 'o' | 'x'
export type CellIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type EndState = 'x' | 'o' | 'tie' | undefined

export type Game = {
    board: Board,
    currentPlayer: Player,
    endState?: EndState,
    // context: {
    //     active: 
    //     info: 
    //     error: 
    // }
}


export const initialGameState = (): Game => {
    return {
        board: [null, null, null, null, null, null, null, null, null],
        currentPlayer: 'x',
    }
}

const winningStates: CellIndex[][] = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal from top-left to bottom-right
    [2, 4, 6]  // diagonal from top-right to bottom-left
]


const playerWins = (game: Game, player: Player) => {
    return winningStates.some((winState) => winState.every((cellIndex) => game.board[cellIndex] === player))
}

const xWins = (game: Game) => playerWins(game, 'x')
const oWins = (game: Game) => playerWins(game, 'o')

function calculateEndState(game: Game): EndState {
    // if(xWin) return 'x'
    if (game.board.every((cell) => cell !== null)) return 'tie'
    if (xWins(game)) return 'x'
    if (oWins(game)) return 'o'
    // do some magic
    return undefined
}

// I want this to be a "pure" function.
// "calculation"
export function move(game: Game, position: CellIndex): Game {
    if (game.board[position] != null) {
        console.log('that move is already taken!')
        return game
    }

    // make a copy of the game, so I can safely edit and mess around with it.
    // plausible nextGame state
    const nextGame = structuredClone(game)
    nextGame.board[position] = game.currentPlayer
    nextGame.currentPlayer = nextGame.currentPlayer === 'x' ? 'o' : 'x'
    nextGame.endState = calculateEndState(nextGame)

    return nextGame
}
