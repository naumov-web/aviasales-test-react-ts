import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Component
import SortingSelector from './SortingSelector';
// Redux
import { IState } from '../../state/contracts';
import { getSort, getFilters } from '../../state/tickets/selectors';
// Handbook
import { sorting } from '../../config/handbooks';
import { createSetSortAction } from '../../state/tickets/actionCreators';

const mapStateToProps = (state : IState) => {
  return {
    selectors: sorting.selectors,
    sort: getSort(state),
    filters: getFilters(state),
  };
};

const handlers = withHandlers({
  onClick: (props : any) => (value : string) => {
    const dispatch = props.dispatch;
    dispatch(createSetSortAction(value));
  }
});

export default compose(
  connect(mapStateToProps),
  handlers
)(SortingSelector);