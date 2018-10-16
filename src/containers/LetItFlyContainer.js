import { connect } from 'react-redux';
import LetItFly from '../components/LetItFly';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const LetItFlyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LetItFly);

export default LetItFlyContainer;