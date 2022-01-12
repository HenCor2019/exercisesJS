// Cual de las siguientes funciones viola el principio de abstraccion

async function createGame(newGame){

    if (newGame.title === '' || newGame.image === '') return 'Please insert a valid game'

    await myDB.insert(newGame)

    return 'Game saved successfully'
}

async function createGame(newGame){

    const isValidGame = verificateGame(newGame)

    if (!isValidGame) return 'Please insert a valid game'

    await saveNeGame(newGame)

    return 'Game saved successfully'
}

async function createGame(newGame){

    const isValidGame = verificateGame(newGame)

    if (!isValidGame) return 'Please insert a valid game'
    
    await myDB.insert(newGame)

    return 'Game saved successfully'
}

async function createGame(newGame){

    if (newGame.title === '' || newGame.image === '') return 'Please insert a valid game'

    await saveNeGame(verificationGame)

    return 'Game saved successfully'
}