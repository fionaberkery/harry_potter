import React from "react"

const Dropdown = ({handleSelectChange, houses}) => {


    return (

        <>
        <label for="houses1"> Choose House </label>
        <select name="houses1" id="houses1" onChange={handleSelectChange}>
            {houses.map(house => {
                return (<option key={house.house} value={house.url}> {house.house} </option> )
            })}
        </select>

        </>

    )
}

export default Dropdown