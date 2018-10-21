import { connect } from 'react-redux';
import Hotels from '../components/Hotels';

const mapStateToProps = (state, ownProps) => ({
    canBook : state.appReducer.canBook
});

const mapDispatchToProps = (dispatch) => ({
});

const HotelsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hotels);

export default HotelsContainer;