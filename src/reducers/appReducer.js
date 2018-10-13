const initialState = {
    isReady: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESOURCES_LOADED':
            return {
                ...state,
                isReady: true
            }
        default: 
            return state
    }
}

export default appReducer;