import React from "react"
import CharacterName from "./CharacterName"

const CharactersList = ({characters}) => {

    const CharacterNodes = characters.map((character, index) => {
        return <CharacterName character={character} index={index} />
    })

    return (

        <>

        <h2> Characters List </h2>

        {CharacterNodes}

        </>

    )
}

export default CharactersList