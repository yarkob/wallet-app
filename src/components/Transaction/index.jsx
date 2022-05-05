import PropTypes from 'prop-types';
import { useContext } from 'react';

import { AppContext } from '../../providers';
import { Wrapper, TransactionDate, Value, Comment } from './style';

const Transaction = ({ transaction: {value, date, comment} }) => {
  const {state} = useContext(AppContext);
  console.log (state)
  return (
    <Wrapper value={value}>
      <TransactionDate>{date}</TransactionDate>
      <Value>{`${value.toFixed (2)} ${state.currency}`}</Value>
      <Comment>{comment}</Comment>
    </Wrapper>
  )
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number
  })
}

Transaction.defaultProps = {
  transaction: {
    label: '',
    value: 0,
  }
}

export default Transaction;
