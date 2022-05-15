import React from "react"
import CharacterName from "./CharacterName"
import Dropdown from "./Dropdown"

const CharactersList = ({handleSelectChange, houses, characters, onCharacterClick, selectedCharacter, favouritesList, onFavButtonClick}) => {

    const CharacterNodes = characters.map((character, index) => {
        return <CharacterName character={character} index={index} onCharacterClick={onCharacterClick} selectedCharacter={selectedCharacter} favouritesList={favouritesList} onFavButtonClick={onFavButtonClick} />
    })

    return (

        <>
        <div id="character-list">

        <h2> Harry Potter Characters </h2>
        <Dropdown handleSelectChange={handleSelectChange} houses={houses}/>
        <br></br>
        

        <p> Click on a characters name to see more info  </p>
        <br></br>

        {CharacterNodes}

        </div>
        </>

    )
}

export default CharactersList