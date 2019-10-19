import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
// Components
import CenterColContainer from './CenterColContainer';
// Redux
import { getSearchId } from '../../../state/tickets/selectors';
import { IState } from '../../../state/contracts';

const mapStateToProps = (state : IState) => {
  return {};
};

const withLifecycle = lifecycle({
  componentDidMount() {
    console.log('componentDidMount');
  }
});

export default compose(
  connect(mapStateToProps),
  withLifecycle
)(CenterColContainer);