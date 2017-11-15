import {combineReducers} from 'redux';
import {
    ADD_RECIPE, 
    REMOVE_FROM_CALENDAR
} from '../actions'
// import default from 'react-redux/lib/connect/connect'

const initialCalendarState = {
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
}

/**
 * Reducer function
 * @param {*} state passed to the reducer if omitted use the initial one. 
 * @param {*} action 
 */
function calendar(state = initialCalendarState, action) {
    const {day, recipe, meal} = action;

    // TODO: object spread syntax ... INVESTIGATE!
    // Using the Object Spread Syntax ... || ...obj avoids to type all of the properties of the object.
    // function myFunction(x, y, z) { }
    // var args = [0, 1, 2];
    // myFunction(...args);
    switch(action.type) {
        case ADD_RECIPE:
            return {
                ...state, 
                [day]: {
                    ...state[day],
                    [meal]: recipe.label,
                }
            };
        case REMOVE_FROM_CALENDAR:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null,
                }
            };
        default:
            return state;
    }
}

/**
 * Reducer function
 * @param {*} state 
 * @param {*} action 
 */
function food(state = {}, action) {
    switch(action.type) {
        case ADD_RECIPE:
            const {recipe} = action;
            return {
                ...state,
                [recipe.label]: recipe
            }
        default:
        return state;
    }
}

// TODO: The problem with having more than one reducer is that you can only call one, you need to combine them...

export default combineReducers({food, calendar});
