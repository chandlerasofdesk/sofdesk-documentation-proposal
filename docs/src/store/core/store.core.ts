import {
    CoreActionTypes,
    SET_SIDEBAR_ACTIVE
} from "./types.core";
import coreInterface from "./interface.core";


const INITIAL_STATE: coreInterface = {
    sideBarActive: false,
};

export default (state = INITIAL_STATE, action: CoreActionTypes) => {
    switch (action.type) {
        case SET_SIDEBAR_ACTIVE:
            return {...state, sideBarActive: action.payload};
        default:
            return state;
    }
};
