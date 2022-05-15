import React from "react"


const CharacterName = ({character, index, onCharacterClick, selectedCharacter, favouritesList, onFavButtonClick}) => {

    const handleClick = () => {
        onCharacterClick(character)
    }

    const handleFavourite = (event) => {
        onFavButtonClick(event.target.value)
    }

    return (

        <>

            <div id="fav-section">
            <p id="text-name" onClick={handleClick}> 
            
                {character.name} 
            </p>

                
                {favouritesList.includes(character.name) ? <button id="fav-button"> ❤️ </button> :
                <button onClick={handleFavourite} value={character.name} id="fav-button"> ♡ </button>}
                
            
            </div>
            
            

            

        

        </>

    )
}

export default CharacterName