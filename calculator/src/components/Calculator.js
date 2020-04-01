import React, { Component } from 'react';
// import Ingredient from './Ingredient'
import Totals from './Totals'

class Calculator extends Component {
    state = {
        inputCarbs1: [],
        inputCarbs2: [],
        totalCarbs: [],
        totalSugars: [],
    }

    handleCarbChange1 = (e) => {
        this.setState({
            inputCarbs1: e.target.value
        })
        console.log(e.target.value)
        this.handleUpdateTotals(e.target.value)
    }

    handleCarbChange2 = (e) => {
        this.setState({
            inputCarbs2: e.target.value
        })
        console.log(e.target.value)
        this.handleUpdateTotals()
    }
    
    handleUpdateTotals = () => {
        const total = this.state.inputCarbs1[0] + this.state.inputCarbs2[0]
        this.setState({
            totalCarbs: [total]
        })
        console.log(this.state.totalCarbs)
    }

    render () {
        return (
            <div className="Calculator">
                <title>Carb and Sugar Calculator</title>
                <Totals 
                    recName="this particular recipe"
                    carbs1={this.state.totalCarbs1} 
                    carbs2={this.state.totalCarbs2} 
                    sugars={this.state.totalSugars}
                    />
                <div className="Card__Ingredient-Data">
                    <p>Ingredient 1</p>
                    <input 
                    type="number"
                    value={this.state.inputCarbs} 
                    onChange={e => this.handleCarbChange1(e)} 
                    ref={(input) => this.input = input}
                    >
                    </input>
                </div>
                <div className="Card__Ingredient-Data">
                    <p>Ingredient 2</p>
                    <input 
                    type="number"
                    value={this.state.inputCarbs} 
                    onChange={e => this.handleCarbChange2(e)} 
                    ref={(input) => this.input = input}
                    >
                    </input>
                </div>
            </div>
        )
    }
}
export default Calculator;