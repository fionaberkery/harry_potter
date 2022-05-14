import React, { useEffect, useState } from "react"
import Dropdown from "../components/Dropdown"
import CharactersList from "../components/CharactersList"
import CharacterDetail from "../components/CharacterDetail"
import photo from "/Users/fionaberkery/CodeClan_work/week_7/weekend_hw/hp_hw/harry_potter_world/src/panorama.jpeg"
import audio from "/Users/fionaberkery/CodeClan_work/week_7/weekend_hw/hp_hw/harry_potter_world/src/hp.mp3"


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

    const onFavButtonClick = (fav) => {
        const newFavs = [...favouritesList, fav]
        setFavouritesList(newFavs)
    }
    
    const favouriteCharactersList = favouritesList.map((item) => {
        return ( <li> {item} </li>)
    })

    return (

        <>
            <img id="image" src={photo}/>


            
            <h1> The Complete Guide To Harry Potter Characters </h1>  
            <br/>
            
            
            <audio controls id="myAudio">
                <source src={audio}/>
            </audio>
            <p id="myAudioTitle">Play for Harry Potter Theme Song</p>
            
            <div id="fav-list">
            <h2> Favourite Characters</h2>
            {favouriteCharactersList}

            </div>
            <section id="main-section" >

            <CharactersList characters={characters} onCharacterClick={onCharacterClick} selectedCharacter={selectedCharacter} favouritesList={favouritesList} onFavButtonClick={onFavButtonClick} />

            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter}></CharacterDetail> : null}

            </section>

        </>

    )
}

export default HarryPotterContainer