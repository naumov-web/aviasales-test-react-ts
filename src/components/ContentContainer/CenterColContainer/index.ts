import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
// Components
import CenterColContainer from './CenterColContainer';
// Redux
import { getSearchId, getTickets } from '../../../state/tickets/selectors';
import { apiLoadTickets } from '../../../state/tickets/effects';
import { IState } from '../../../state/contracts';
import { Dispatch } from 'redux';

const mapStateToProps = (state : IState) => {
  return {
    search_id : getSearchId(state),
    tickets: getTickets(state)
  };
};

const mapDispatchToProps = (dispatch : Dispatch) => ({
  loadTickets: (search_id : string) =>{
    apiLoadTickets(dispatch, search_id);
  }
});

const withLifecycle = lifecycle({
  componentDidMount() {
    const props : any = this.props;
    const loadTickets = props.loadTickets;

    loadTickets(props.search_id);
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLifecycle
)(CenterColContainer);