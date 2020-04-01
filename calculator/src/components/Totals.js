import React from 'react';
import Ingredient from './Ingredient'

export default function Totals (props) {
    
    const recName = props.recName;
    const carbs1 = props.carbs1;
    const carbs2 = props.carbs2;
    const carbsTotal = carbs1 + carbs2;
    const sugars = props.sugars;
    const measurement = props.measurement;

    return (
        <div className="Card__Ingredient-Data">
            <p>Recipe totals for {recName}: </p>
            <br />
            <hr />
            <p>grams of carbs: </p>
            <span>{carbsTotal}</span>
            <br />
            <hr />
            <p>grams of sugar: </p>
            <span>{sugars}</span>
            <br />
            <hr />
            <p>measurement: </p>
            <span>{measurement}</span>
            <br />
        </div>
    )
}