export const darkModeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return{
                darkmode: !state.darkmode
            }
        default:
           return state;
    }
}