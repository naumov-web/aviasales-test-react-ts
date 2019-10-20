import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
// Components
import TransfersCountFilter from './TransfersCountFilter';
// Redux
import { IState } from '../../state/contracts';
import { getFilters } from '../../state/tickets/selectors';
import { createSetFiltersAction } from '../../state/tickets/actionCreators';
// Handbook
import { filters } from '../../config/handbooks';

const mapStateToProps = (state : IState) => {
  return {
    items: filters.transfers_count.items,
    filters: getFilters(state)
  };
};

const handlers = withHandlers({
  onCheckboxClick: (props : any) => (id : Number) => {
    const { filters, dispatch } = props;
    if (filters.indexOf(id) === -1) {

      const new_filters = filters.map((item : Number) => item);

      dispatch(
        createSetFiltersAction(
          new_filters.concat([id])
        )
      );
    } else {
      dispatch(
        createSetFiltersAction(filters.filter((item : Number) => item !== id))
      )
    }
  }
});

export default compose(
  connect(mapStateToProps),
  handlers
)(TransfersCountFilter);