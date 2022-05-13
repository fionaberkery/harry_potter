import React from "react"

const CharacterName = ({character, index, onCharacterClick, selectedCharacter}) => {

    const handleClick = () => {
        onCharacterClick(character)
    }


    return (

        <>


            <p id="pointer" onClick={handleClick}>
                {character.name}
                
            </p>
        

        </>

    )
}

export default CharacterName