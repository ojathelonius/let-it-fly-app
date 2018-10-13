import * as Expo from "expo";

export const startLoadingResources = () => ({
    type: 'START_LOADING_RESOURCES'
})

export const resourcesLoaded = () => ({
    type: 'RESOURCES_LOADED'
})

export const loadResources = () => (async (dispatch) => {

    dispatch(startLoadingResources());

    await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    Expo.SplashScreen.hide();
    
    dispatch(resourcesLoaded());

})
