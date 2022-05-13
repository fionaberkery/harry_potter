import React from "react"

const CharacterDetail = ({selectedCharacter}) => {


    return (

        <>
        <section>
            <h3> Character name {selectedCharacter.name} </h3>
            <p> <b>House</b> {selectedCharacter.house} </p>
            <p> <b>Ancestry</b> {selectedCharacter.ancestry} </p>
            <p> <b>Date of Birth</b> {selectedCharacter.dateOfBirth} </p>
            <p> <b>Gender</b> {selectedCharacter.gender} </p>
            <p> <b>Species</b> {selectedCharacter.species} </p>
            <p> <b> Wand Details</b> <br/> Wood : {selectedCharacter.wand.wood} <br/> Core : {selectedCharacter.wand.core} <br/> Length : {selectedCharacter.wand.length} </p>
            <p> <img src={selectedCharacter.image} width="300px" alt="No image available" /> </p>

        </section>
        </>

    )
}


export default CharacterDetail
