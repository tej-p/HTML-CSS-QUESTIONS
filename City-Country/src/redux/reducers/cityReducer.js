import { ActionTypes } from "../constants/action-types"

const initialState = {
    cities : []
}

export const cityReducer = (state = initialState, {type, payload }) => {
    switch(type){
        case ActionTypes.SET_CITIES:
            return {...state, cities:payload};
        case ActionTypes.SELECTED_CITIES:
            return state;    
    }
} 