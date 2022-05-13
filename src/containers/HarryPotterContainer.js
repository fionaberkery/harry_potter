import React, { useEffect, useState } from "react"
import Dropdown from "../components/Dropdown"
import CharactersList from "../components/CharactersList"
import CharacterDetail from "../components/CharacterDetail"
import photo from "/Users/fionaberkery/CodeClan_work/week_7/weekend_hw/hp_hw/harry_potter_world/src/panorama.jpeg"
import audio from ""


const HarryPotterContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])

    useEffect (() => {
        getCharacters()
    }, [])

    const getCharacters = function () {
        fetch("http://hp-api.herokuapp.com/api/characters")
        .then(res => res.json())
        .then(characters => setCharacters(characters))
    }

    const onCharacterClick = (character) => {
        setSelectedCharacter(character)
    }


    return (

        <>
            <img src={photo}/>
            <h1> Harry Potter </h1>  
            <audio controls>
            <source src={audio}/>
            </audio>

            <CharactersList characters={characters} onCharacterClick={onCharacterClick} selectedCharacter={selectedCharacter} />

            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter}></CharacterDetail> : null}

        </>

    )
}

export default HarryPotterContainer