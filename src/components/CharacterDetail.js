import React from "react"

const CharacterDetail = ({selectedCharacter}) => {


    return (

        <>
        <section id="detail">
            <h1> {selectedCharacter.name} </h1>
            
            
            <section id="details-character">
            
            <div id="character-deets">
            <p> <b id="decor">House </b> <br></br>{selectedCharacter.house} </p>
            <p> <b id="decor">Ancestry </b> <br></br>{selectedCharacter.ancestry} </p>
            <p> <b id="decor">Date of Birth </b> <br></br>{selectedCharacter.dateOfBirth} </p>
            <p> <b id="decor">Gender </b> <br></br>{selectedCharacter.gender} </p>
            <p> <b id="decor">Species </b> <br></br>{selectedCharacter.species} </p>
            <p> <b id="decor">Patronus </b> <br></br>{selectedCharacter.patronus} </p>
            <p> <b id="decor"> Wand Details </b> <br/> Wand wood : {selectedCharacter.wand.wood} <br/> Wand core : {selectedCharacter.wand.core} <br/> Wand length : {selectedCharacter.wand.length} </p>
            </div>
            
            <section id="character-image">
            <p> <img src={selectedCharacter.image} width="300px" alt="No image available" /> </p>
            </section>
            
            
            </section>
        </section>
        </>

    )
}


export default CharacterDetail
