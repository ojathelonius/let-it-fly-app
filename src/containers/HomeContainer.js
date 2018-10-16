import { connect } from 'react-redux';
import Home from '../components/Home';
import { notifyOverbooking } from '../actions/appActions';

const mapStateToProps = (state, ownProps) => ({
    isOverbooked : state.appReducer.isOverbooked
});

const mapDispatchToProps = (dispatch) => ({
    notifyOverbooking: () => dispatch(notifyOverbooking()),
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;