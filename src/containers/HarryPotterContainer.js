import React, { useEffect, useState } from "react"
import Dropdown from "../components/Dropdown"
import CharactersList from "../components/CharactersList"
import CharacterDetail from "../components/CharacterDetail"

const HarryPotterContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectCharacter, setSelectCharacter] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])

    useEffect (() => {
        getCharacters()
    }, [])

    const getCharacters = function () {
        fetch("http://hp-api.herokuapp.com/api/characters")
        .then(res => res.json())
        .then(characters => setCharacters(characters))
    }


    return (

        <>

            <h1> Harry Potter </h1>        

            <CharactersList characters={characters}/>

        </>

    )
}

export default HarryPotterContainer