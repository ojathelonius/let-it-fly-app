import { connect } from 'react-redux';
import Flights from '../components/AlternativeFlights';

const mapStateToProps = (state, ownProps) => ({
    canBook : state.appReducer.canBook
});

const mapDispatchToProps = (dispatch) => ({
});

const FlightsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Flights);

export default FlightsContainer;