import React from "react"
import CharacterName from "./CharacterName"

const CharactersList = ({characters, onCharacterClick, selectedCharacter}) => {

    const CharacterNodes = characters.map((character, index) => {
        return <CharacterName character={character} index={index} onCharacterClick={onCharacterClick} selectedCharacter={selectedCharacter}/>
    })

    return (

        <>
        <div id="character-list">

        <h2> Characters List </h2>

        {CharacterNodes}

        </div>
        </>

    )
}

export default CharactersList