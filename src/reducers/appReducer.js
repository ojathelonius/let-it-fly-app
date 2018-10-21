const initialState = {
    isReady: false,
    showHeader: true,
    isOverbooked: false,
    showActivityModal: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESOURCES_LOADED':
            return {
                ...state,
                isReady: true
            }
        case 'NOTIFY_OVERBOOKING':
            return {
                ...state,
                isOverbooked: true
            }
        case 'SHOW_ACTIVITY_MODAL':
            return {
                ...state,
                showActivityModal: true
            }
        case 'HIDE_ACTIVITY_MODAL':
            return {
                ...state,
                showActivityModal: false
            }
        default:
            return state
    }
}

export default appReducer;