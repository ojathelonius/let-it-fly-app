import { connect } from 'react-redux';
import CustomHeader from '../components/CustomHeader';

const mapStateToProps = (state, ownProps) => ({
    showHeader : state.appReducer.showHeader,
    headerTitle : state.appReducer.headerTitle
});

const mapDispatchToProps = (dispatch) => ({
});

const CustomHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomHeader);

export default CustomHeaderContainer;