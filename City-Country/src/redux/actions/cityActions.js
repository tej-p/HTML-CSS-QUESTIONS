import { ActionTypes } from "../constants/action-types"

export const setCities = (cities)=> {
    return {
        type:ActionTypes.SET_CITIES,
        payload:cities,
    };
};

export const selectedCities = (city) => {
    return {
        type: ActionTypes.SELECTED_CITIES,
        payload:city,
    };
}