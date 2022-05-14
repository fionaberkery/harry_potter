import React from "react"
import CharacterName from "./CharacterName"

const CharactersList = ({characters, onCharacterClick, selectedCharacter, favouritesList, onFavButtonClick}) => {

    const CharacterNodes = characters.map((character, index) => {
        return <CharacterName character={character} index={index} onCharacterClick={onCharacterClick} selectedCharacter={selectedCharacter} favouritesList={favouritesList} onFavButtonClick={onFavButtonClick} />
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