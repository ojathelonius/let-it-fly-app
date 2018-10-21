import { connect } from 'react-redux';
import ActivityCard from '../components/ActivityCard';
import { showActivityModal } from '../actions/appActions';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
    showActivityModal: () => dispatch(showActivityModal()),
});

const ActivityCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityCard);

export default ActivityCardContainer;