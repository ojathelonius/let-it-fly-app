const initialState = {
    isReady: false,
    showHeader: true,
    isOverbooked: false
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
        default:
            return state
    }
}

export default appReducer;