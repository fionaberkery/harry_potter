import React, { useEffect, useState } from "react"
import Dropdown from "../components/Dropdown"
import CharactersList from "../components/CharactersList"
import CharacterDetail from "../components/CharacterDetail"
import photo from "/Users/fionaberkery/CodeClan_work/week_7/weekend_hw/hp_hw/harry_potter_world/src/panorama.jpeg"
import audio from "/Users/fionaberkery/CodeClan_work/week_7/weekend_hw/hp_hw/harry_potter_world/src/hp.mp3"


const HarryPotterContainer = ({houses}) => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])


    useEffect (() => {
        getCharacters(houses[0].url)
    }, [houses])


    const getCharacters = url => {
        fetch(url)
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
        return ( <p> {item} </p>)
    })

    const handleSelectChange = event => {
        getCharacters(event.target.value)
    }

    return (

        <>

            

            <img id="image" src={photo}/>


            
            <h1 id="main-title"> The Complete Guide To Harry Potter Characters </h1>  
            <br/>

            
            <div id="audio-bit">
            <audio controls id="myAudio">
                <source src={audio}/>
            </audio>
            <p id="myAudioTitle">Play for a more immersive experience while scrolling</p>
            </div>
            
            <section id="main-section" >

            <CharactersList handleSelectChange={handleSelectChange} houses={houses} characters={characters} onCharacterClick={onCharacterClick} selectedCharacter={selectedCharacter} favouritesList={favouritesList} onFavButtonClick={onFavButtonClick} />

            <section id="right-container">
            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter}></CharacterDetail> : null}

            

            <div id="fav-list">
            <h3 id="fav-heading"> Save Your Favourite Characters Here </h3>
            <p id="favs">
            {favouriteCharactersList}
            </p>

            </div>
            </section>
            </section>

        </>

    )
}

export default HarryPotterContainer