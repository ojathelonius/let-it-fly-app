import { connect } from 'react-redux';
import LetItFly from '../components/LetItFly';

const mapStateToProps = (state, ownProps) => ({
    canVolunteer: state.appReducer.isOverbooked,
    canBook: state.appReducer.canBook
});

const mapDispatchToProps = (dispatch) => ({
});

const LetItFlyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LetItFly);

export default LetItFlyContainer;