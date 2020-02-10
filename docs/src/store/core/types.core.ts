export const SET_SIDEBAR_ACTIVE = 'SET_SIDEBAR_ACTIVE';
export const SET_ERROR_DIALOG = 'SET_ERROR_DIALOG';

export interface ErrorDialog {
    title: string, message: string, open: boolean
}

interface SetSidebarActive {
    type: typeof SET_SIDEBAR_ACTIVE
    payload: boolean
}

interface SetErrorDialog {
    type: typeof SET_ERROR_DIALOG
    payload: ErrorDialog
}



export type CoreActionTypes = SetSidebarActive | SetErrorDialog
