import { connect } from 'react-redux';
import Home from '../components/Home';
import { notifyOverbooking, notifyIsVolunteer } from '../actions/appActions';

const mapStateToProps = (state, ownProps) => ({
    isOverbooked : state.appReducer.isOverbooked,
    canBook : state.appReducer.canBook
});

const mapDispatchToProps = (dispatch) => ({
    notifyOverbooking: () => dispatch(notifyOverbooking()),
    notifyIsVolunteer: () => dispatch(notifyIsVolunteer()),
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;