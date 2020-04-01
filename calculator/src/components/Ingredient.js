import React from 'react'

export default function Ingredient (props) {

    const ingName = props.ingName;
    const carbs = props.carbs;
    const sugars = props.sugars;
    const measurement = props.measurement;

    return (
        <div className="Card__Ingredient-Data">
            <p>Ingredient: </p>
            <input></input>
            <span>{ingName}</span>
            <br />
            <hr />
            <p>grams of carbs: </p>
            <input></input>
            <span>{carbs}</span>
            <br />
            <hr />
            <p>grams of sugar: </p>
            <input></input>
            <span>{sugars}</span>
            <br />
            <hr />
            <p>measurement: </p>
            <input></input>
            <span>{measurement}</span>
            <br />
        </div>
    )
}