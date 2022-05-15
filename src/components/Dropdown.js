import React from "react"

const Dropdown = ({handleSelectChange, houses}) => {


    return (

        <>
        <div id="dropdown">
        <label for="houses1"> View Characters By House </label> 
        <select onChange={handleSelectChange}>
            {houses.map(house => {
                return (<option key={house.house} value={house.url} label={house.house}> {house.name} </option> )
            })}
        </select>
        </div>
        </>

    )
}

export default Dropdown