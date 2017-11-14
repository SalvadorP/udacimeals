export cosnt ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe({day, recipe, meal}) {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal,
    }
}

export function removeFromCalendar({day, recipe, meal}) {
    return {
        type: REMOVE_FROM_CALENDAR,
        recipe,
        day,
        meal,
    }
}