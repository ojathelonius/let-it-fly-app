import { connect } from 'react-redux';
import Activities from '../components/Activities';
import { hideActivityModal } from '../actions/appActions';

const mapStateToProps = (state, ownProps) => ({
    showActivityModal : state.appReducer.showActivityModal
});

const mapDispatchToProps = (dispatch) => ({
    hideActivityModal: () => dispatch(hideActivityModal()),
});

const ActivitiesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Activities);

export default ActivitiesContainer;