import { connect } from 'react-redux';
import App from '../components/App';
import { loadResources, resourcesLoaded } from '../actions/appActions';

const mapStateToProps = (state, ownProps) => ({
    isReady : state.appReducer.isReady
});

const mapDispatchToProps = (dispatch) => ({
    loadResources: () => dispatch(loadResources()),
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;