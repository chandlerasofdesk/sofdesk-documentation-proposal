import {
    CoreActionTypes, ErrorDialog, SET_ERROR_DIALOG, SET_SIDEBAR_ACTIVE
} from "./types.core";

export function setSidebarActive(open: boolean): CoreActionTypes {
    return {
        type: SET_SIDEBAR_ACTIVE,
        payload: open
    }
}


export function setErrorDialog(payload: ErrorDialog): CoreActionTypes {
    return {
        type: SET_ERROR_DIALOG,
        payload
    }
}

